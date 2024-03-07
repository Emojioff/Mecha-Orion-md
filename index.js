/*

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                      // 
//                                                                                                      // 
//                                         Ｖ：１．０．１                                                 // 
//                                                        
//
//
//           
//
//  
// 
//                                                  
//                                                                                                    
//                                                         
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Mecha orion-MD
   * @author : Cyber Emoji & Joel Tyler
   * @description : Get baileys qr, where session id Converted into 'base64'. You can change it According to your needs.
   * @version 1.0.0
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By Cyber Emoji & Joël Tyler .
   * © 2023 Mecha orion-MD
*/

const fs   = require("fs-extra");
const pino = require("pino");
let qrcode = require("qrcode-terminal");


if (fs.existsSync('./auth_info_baileys')) {
  fs.emptyDirSync(__dirname + '/auth_info_baileys');
  require('child_process').exec('rm -rf auth_info_baileys')
  console.log('\nPlease Wait... Removing Cache files');
  setTimeout(() => {   console.log(' ')    }, 100);
  setTimeout(() => {   console.log('Q')    }, 300);
  setTimeout(() => {   console.log('R')    }, 500);
  setTimeout(() => {   console.log(' ')    }, 700);
  setTimeout(() => {   console.log('B')    }, 900);
  setTimeout(() => {   console.log('Y')    }, 1100);
  setTimeout(() => {   console.log(' ')    }, 1300);
  setTimeout(() => {   console.log('M')    }, 1500);
  setTimeout(() => {   console.log('E')    }, 1700);
  setTimeout(() => {   console.log('C')    }, 1900);
  setTimeout(() => {   console.log('H')    }, 2100);
  setTimeout(() => {   console.log('A')    }, 2300);
  setTimeout(() => {   console.log('M')    }, 2500);
  setTimeout(() => {   console.log('D')    }, 2700);
  setTimeout(() => {   console.log('Cache Cleared..!\nRun The Script Again')    }, 2900);
  setTimeout(() => {   process.exit()      }, 3000)
};
setTimeout(() => {
  const { default: makeWASocket, useMultiFileAuthState, Browsers, delay, makeInMemoryStore, } = require("@sampandey001/baileys");
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  async function sᴜʜᴀɪʟ_ʙᴀɪʟᴇʏs_ǫʀ() {
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys')
    try {
      let session = makeWASocket({ printQRInTerminal: true, logger: pino({ level: "silent" }), browser: Browsers.macOS("Desktop"), auth: state });
      session.ev.on("connection.update", async (s) => {
        const { connection, lastDisconnect, qr } = s;
        if (connection == "open")
        {
          await delay(500);
          let user = session.user.id;         // User = Number of that user who just Scanned the Qr

//===========================================================================================
//===============================  SESSION ID   =============================================
//===========================================================================================
          let unique = fs.readFileSync(__dirname + '/auth_info_baileys/creds.json') //GETTING CREDS FROM CREDS.json TO GENERATE SESSION ID 
          c = Buffer.from(unique).toString('base64'); // CHANGE 'base64' ACCORDING TO YOUR NEEDS 
          console.log(`
====================  SESSION ID  ===========================                   
SESSION-ID ==> ${c}\n\n
Ne fournissez votre SESSION_ID à personne, sinon cet utilisateur pourrait accéder à votre compte.Ne fournissez votre SESSION_ID à personne, sinon cet utilisateur pourrait accéder à votre compte.
Merci.
-------------------  SESSION FERMÉ   -----------------------
`)   

let cc = `╭《 *MERCI D'AVOIR   CHOISI MECHA ORION-MD* 》───⊷         ◎═•『*𖤍🂱✞*』•═◎
 |╭────────────
┃┃    《 •••MECHA 
┃┃ ORION-MD•••》
┃
┃┃       *✗✪1.Github:*[https://github.com/Emojioff/Mecha-Orion-md 🤖]
┃┃       
┃┃ *✗✪2.Createur:*[https://wa.me/2250500010852 
https://wa.me/2250787700239 👨‍💻]
┃┃ 
┃┃       *✗✪3.Support:*[https://chat.whatsapp.com/FD7qMppsHXkCSzbRqfRRcc 🗨️

https://www.buymeacoffee.com/mechaoriont ☕

*Note:* ne fournissez pas votre identifiant de session