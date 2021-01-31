let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: AhmadGans
Script: @Nurotomo
Github: 
Rahasia tod

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @_ahhmad_.f
➥ YouTube:
https://www.youtube.com/channel/UC0ECqULbTSD0Wiz8mz0wTVw

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Saweria: https://saweria.co/AmdBot
╠➥ Tsel: 0813-8600-8628
╠➥ Trakteer: https://trakteer.id/amdbot
║>Request? Wa.me/6281386008628
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

