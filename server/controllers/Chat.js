const Chat = require('../models/Chat')

exports.createNewChat = async (req, res) => { 
  try{
      const { chatName, members } = req.body;
      const chatCreator = req.user.username;
      
      if(!chatName || !members){
        return res.status(400).json({message: "Fill the fields."})
      }
  
      newChat = await Chat.create({
        chatName, members, chatCreator
      })
          return res.status(200).json({
              success: true,
              newChat
          });
  } catch(err)
      {
          return res.status(400).json({message: "Some unknown err.."})
      }
}

exports.getAllChats = async (req, res) => { 
  try{
    const allChats = await Chat.find()
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
    console.log(text)
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

