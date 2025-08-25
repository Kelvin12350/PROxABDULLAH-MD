const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PROxABDULLAH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0Vua3VTa1NzYUJjUUEzUUdsa204QkhUVlpZS21MNElrN0dJdnI4K1dtaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2I3clZ0ZysrZDlEWkh6WElSMFd0UGlyaHpWRGIzMFFyMFBXQndOWTVVWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSCsxeENzdXZKbmFqWW9aSWpMS3BWaHBXUy9KTFFqWjdpUEZDNHlBMlZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPeUx6Yk9xT3J1YnZrSVZrRzAwVE5pSmFGTDFWOXkvVFNwWHp3a2w5RjJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndKcVQ4bE8rOUxobXBqc2NwM0NxUExrRHhoeTNLT3Jud2xhN1ZlUkhPbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBiYUozeEFEYkQ0czcxQXZ1OW9aRCs3VmZIWUFQMTdydUZORzVVRHlvamM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkxKTHQvMEdNTzUrSUFkb0RuMERaVjVGSnVXVzlpZmVuVDFXVGVtTm0wYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTQ5RTZ2bTl3bW93OHp0UkhKZENpQXRUL1F3THdjSm80MmlLRm1hSi9IYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJPRzBJME0ybnVwaWFKTnp3NUN5c3h4WjFmSGhYRkszNnZ0ZGc4bzllUXJsYnNSZnNjdDlnanhzbDRjcjZvSXZxemU5OXJLN2pMNmtxS0pJUklYcmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjIsImFkdlNlY3JldEtleSI6IkNJdzluNFFXempLVHIvUE9JUkp3SDBaSEFLb25YaS9hS2lnMklURWhKMkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTExNTA2ODY4OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGODA2NTQxOEUxQzZDRTJDODAzRjVGRkM2RTAyMTQ1MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MTM2ODE0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MTE1MDY4Njg5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjcyMThEQ0NGQzBCNDY0RDE4NDc5QUU0RTIzQ0ZDMUQwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYxMzY4MTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkQxVFdHTllNIiwibWUiOnsiaWQiOiIyMzQ5MTE1MDY4Njg5OjI4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjI1NzY1NTA5NTkxMjQ0OjI4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVh3aVBRSEVPbUtzc1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidDZYd3Z0RXNMT2xxQkxaenJQUjBGdExXRmlndERBaHAwU2x0TUdFVHpIND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNFJidG1SM3AzbjNCaS92N1M1TzVCUEdONHAxekxSQ1FUcnNhSU9HV1l0eWVEWjhvRUo0R1JER0JXK3BtdGlYNCs4dG1TWHhCWEp6WGVIemVmbi83Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6Im9YVXkyVWdVTm1PTk5oYUJ6b3M4bndEc2l2TEt1bmk5YWRyMFZYSGpuRTFVbjUxb0hMelBWWGR3RnExY0pTamdnbmJ6d3JNS21vbHVjRjNIb3pqOWp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTExNTA2ODY4OToyOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiZWw4TDdSTEN6cGFnUzJjNnowZEJiUzFoWW9MUXdJYWRFcGJUQmhFOHgrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYxMzY4MTIsImxhc3RQcm9wSGFzaCI6IjJQMVloZiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQkcyIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ꧁𓆩PʀᴏˣAʙᴅᴜʟʟᴀʜ𓆪꧂ 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/lom1ep.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "꧁𓆩PʀᴏˣAʙᴅᴜʟʟᴀʜ𓆪꧂",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "꧁𓆩PʀᴏˣAʙᴅᴜʟʟᴀʜ𓆪꧂",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923213509846",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*꧁𓆩PʀᴏˣAʙᴅᴜʟʟᴀʜ𓆪꧂*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꧁𓆩PʀᴏˣAʙᴅᴜʟʟᴀʜ𓆪꧂ ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lom1ep.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923213509846",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
