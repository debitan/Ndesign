const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const {
    kanjiName,
    furiganaName,
    eventDate,
    eventLocation,
    email,
    phone,
    oneOff,
    regular,
    celebration,
    undecided,
    description
  } = req.body

  const content = {
    to: 'dwm503@gmail.com',
    from: email,
    subject: `新しいイベント問い合わせ From - ${email}`,
    text: `
        フリガナ：${furiganaName}
        Email: ${email}
        電話番号：${phone}
        イベント予定日：${eventDate}
        イベント予定会場：${eventLocation}
        短発装飾：${oneOff}
        定期装花：${regular}
        お祝い花：${celebration}
        未定：${undecided}
        ご相談内容： : ${description}
    `,
    html: `
        <p>お名前：${kanjiName}</p>
        <p>フリガナ：${furiganaName}</p>
        <p>Email: ${email}</p>
        <p>電話番号：${phone}</p>
        <p>イベント予定日：${eventDate}</p>
        <p>イベント予定会場：${eventLocation}</p>
        <p>短発装飾：${oneOff}</p>
        <p>定期装花：${regular}</p>
        <p>お祝い花：${celebration}</p>
        <p>未定：${undecided}</p>
        <p>ご相談内容： : ${description}</p>
    `
  }

  try {
    await sgMail.send(content)
    res.status(200).send('問い合わせしました')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('問い合わせできませんでした')
  }
}
