const Chat = require('../models/Chat')
const User = require('../models/User');

exports.createNewChat = async (req, res) => { 
  try{
      const { chatName, memberlist } = req.body;
      const chatCreator = req.user.username;

      if(!chatName || !memberlist){
        return res.status(400).json({message: "Fill the fields."})
      }

      var initialmembers = [] //emails
      initialmembers = memberlist.replace(/\s/g,'').split(',');
      
    
      var registeredmembers = [];
      var nonregisteredmembers = [];

      //does the user exist?
    let i;
    for ( i = 0; i < initialmembers.length; i++)
    {
      var u = await User.find({email: initialmembers[i]}, {email: 1}).select("+password");
      if(u.length === 0)
          {
              nonregisteredmembers.push(initialmembers[i]);
          }
        else
          {
              registeredmembers.push(initialmembers[i])
          }
    }

if(nonregisteredmembers.length > 0)
{
  return res.status(200).json({
    success: false,
    message: `can not create group with ${nonregisteredmembers}`
});
}


      newChat = await Chat.create({
        chatName, members: registeredmembers, chatCreator
      })
          return res.status(200).json({
              success: true,
              newChat
          });
  } catch(err)
      {   console.log(err)
          return res.status(400).json({message: "Some unknown err.."})
      }
}

exports.getAllChats = async (req, res) => { 
  try{
    const allChats = await Chat.find({members : { $in : [req.user.email] }})
          return res.status(200).json({
              success: true,
              allChats
          });
  } catch(err)
      {
          return res.status(400).json({message: "Some unknown err.."})
      }
}

exports.saveMsg = async (req, res) => {
  try {
    //chatgroup _id, {text:  , sender: }
    const { chatGroupId, text, sender } = req.body;
    const chatgroup = await Chat.findById(chatGroupId);
    if(!chatgroup) {
      return res.status(400).json({
        success: false,
        message: " ChatGroup not found hence message was not saved "
      })
    } 

    chatgroup.messages.push({
      text, sender,
    });

    await chatgroup.save();

    res.status(200).json({
      success: true,
      chatgroup
    })

  } catch (error) {
    return res.status(400).json({message: "Some unknown err.."})
  }
}

