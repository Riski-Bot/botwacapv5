let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Saweria [https://saweria.co/AmdBot]
│ • Telkomsel [081386008628]
│ • Trakteer [https://trakteer.id/amdbot]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281386008628
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
