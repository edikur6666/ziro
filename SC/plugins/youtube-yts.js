import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)

  if (!text) throw 'Cari apa?'
  let cari = await youtubeSearch(`${text}`)
    let dapet = cari.video
    let listSections = []
	Object.values(dapet).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Video š„', usedPrefix + 'ytv ' + v.url + ' yes', '\nā *Duration:* ' + v.durationH + '\nā²ļø *Uploaded:* ' + v.publishedTime + '\nšļø *Views:* ' + v.view + '\nš *Url:* ' + v.url],
          ['Audio š§', usedPrefix + 'yta ' + v.url + ' yes', '\nā *Duration:* ' + v.durationH + '\nā²ļø *Uploaded:* ' + v.publishedTime + '\nšļø *Views:* ' + v.view + '\nš *Url:* ' + v.url]
        ]])
	})
	return conn.sendList(m.chat, htki + ' šŗ YT Search š ' + htka, `ā” Silakan pilih YouTube Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `āļø YouTube Search Disini āļø`, listSections, m)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^y(outubesearch|ts(earch)?)$/i

export default handler
/*
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
  if (!text) throw 'Cari apa?'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
š *${v.title}* 
š _${v.url}_
ā° Duration: ${v.durationH}
š¤ Uploaded ${v.publishedTime}
šļø ${v.view} views
      `.trim()
      case 'channel': return `
ā­āāāāāāāā¢ *CHANNEL*
āš *${v.channelName}* 
āš _${v.url}_
āš _${v.subscriberH} Subscriber_
āš„ ${v.videoCount} video
āāāāāāāāā¢
`.trim()
    }
  }).filter(v => v).join('\n\nāāāāāāāāāāāāāāāāāāāāāāāāāāā\n\n')
  m.reply(`*${htki} SEARCH ${htka}*\n\n` + teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

export default handler
*/