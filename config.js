const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© 𓅓𝙒𝞖𝞘𝙕𓅓" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254740841168";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254740841168";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'available' | 'available' | 'composing' | 'recording' | 'available


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_24_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMixcbiAgICAgICAgNTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDYsXG4gICAgICAgIDAsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTksXG4gICAgICAgIDkzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI4LFxuICAgICAgICA1NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDkwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgOTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNixcbiAgICAgICAgMjU0LFxuICAgICAgICA0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUyLFxuICAgICAgICA2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTksXG4gICAgICAgIDIzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxODQsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDksXG4gICAgICAgIDY2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPUVZaZE4rSU10Qm1NUXFNR1ZDTlNvdXdUVnJLNXd3ZEtpcnlOT0g4T3lZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc0MDg0MTE2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTU0NjVBNTg5NTNFQzdBNzNERkJDQ0YwMkNBQTUzNDlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0NjkzODUyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzQwODQxMTY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNTkxMzBEM0EwMjQ0NEM2MkRGRjYyMDdEQUU1REZCNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ2OTM4NTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibXoyNy1DekdSa1NxS2ZYTVNYdVBVZ1wiLFxuICBcInBob25lSWRcIjogXCI4OTdjNjJjNy00NDkwLTRkMTktOWEwZS1jMmYzZWQ5NDdmYThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUsXG4gICAgICAxMDgsXG4gICAgICAxMCxcbiAgICAgIDU2LFxuICAgICAgNyxcbiAgICAgIDM2LFxuICAgICAgMTk0LFxuICAgICAgMjE0LFxuICAgICAgMjQxLFxuICAgICAgMjE0LFxuICAgICAgODcsXG4gICAgICAxOTEsXG4gICAgICAyMDUsXG4gICAgICAxMTUsXG4gICAgICA1MyxcbiAgICAgIDkwLFxuICAgICAgOTcsXG4gICAgICAyOCxcbiAgICAgIDE4MSxcbiAgICAgIDE3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICA4LFxuICAgICAgNDUsXG4gICAgICAxNzYsXG4gICAgICAxODEsXG4gICAgICAxNjMsXG4gICAgICAxMDgsXG4gICAgICAxMSxcbiAgICAgIDI0MSxcbiAgICAgIDE2NixcbiAgICAgIDIyNCxcbiAgICAgIDEwMCxcbiAgICAgIDExOCxcbiAgICAgIDE1OSxcbiAgICAgIDg2LFxuICAgICAgMjE3LFxuICAgICAgODcsXG4gICAgICAxNzEsXG4gICAgICAxOCxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCWlk3NlhaRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQwODQxMTY4OjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8JOFk/CdmZLwnZ6W8J2emPCdmZXwk4WTXCIsXG4gICAgXCJsaWRcIjogXCIzMDc5NTQ2OTE2ODg3MTozOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMU1k4SUFFRU5Tbmxic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJsL3NablBJK1hTYTNGRnlPaEt0eS80QmJ4TGk2UmxibFdWd0UzWVJ4alk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZmFjZG51aEZmUHZMVnEwUm41c2FrbVYvR2pCaEtyRUJJdnBSbWtEc3JtS1FXdVNoaXlXSXBXQ2JrSGV0NHZjT0Q4cjBpaTYxOU1JMWFjcGR4Umd5Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia0VSWHlrZnNGWDk5QWh6NXRjV2tJbDRJQ0NyeTN6Wkw1QlUwTVVYc2lNay9yS2RtcCtmUE4yVElVZTZXRXVaWEgzdGgyUmF3MTROVlA3aHZmazAxaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQwODQxMTY4OjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ2OTM4NDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGR0pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZHSi5qc29uIjogIntcImtleURhdGFcIjpcIm5FZThVaHZoZzBuM2ZLTlBJeEdiVzIrQUNJaXF5MnRScDU0WWJmWVIvVVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA3NTU3OTk1NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0NjkzODUxNzY1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𓅓𝙒𝞖𝞘𝙕𓅓",
  packname: process.env.PACK_NAME || "𓅓𝙒𝞖𝞘𝙕𓅓",
  botname : process.env.BOT_NAME  || "𓅓𝙒𝞖𝞘𝙕𓅓",
  ownername:process.env.OWNER_NAME|| "𓅓𝙒𝞖𝞘𝙕𓅓",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
