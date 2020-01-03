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
    bouquetAndButtonhole,
    tableFlowers,
    ringPillow,
    headset,
    roomDecorations,
    giftForParents,
    undecided,
    description
  } = req.body

  const content = {
    to: 'plusorminus.ndesign@gmail.com',
    from: email,
    subject: `新しいウエディング問い合わせ From - ${email}`,
    text: `
        フリガナ：${furiganaName}
        Email: ${email}
        電話番号：${phone}
        ウエディング予定日：${eventDate}
        ウエディング予定会場：${eventLocation}
        ブーケー＆ブートニア：${bouquetAndButtonhole}
        テーブル装飾：${tableFlowers}
        リングピロー：${ringPillow}
        ヘッドセット：${headset}
        空間装飾：${roomDecorations}
        贈呈花：${giftForParents}
        未定：${undecided}
        ご相談内容： : ${description}
    `,
    html: `
        <p>お名前：${kanjiName}</p>
        <p>フリガナ：${furiganaName}</p>
        <p>Email: ${email}</p>
        <p>電話番号：${phone}</p>
        <p>ウエディング予定日：${eventDate}</p>
        <p>ウエディング予定会場：${eventLocation}</p>
        <p>ブーケー＆ブートニア：${bouquetAndButtonhole}</p>
        <p>テーブル装飾：${tableFlowers}</p>
        <p>リングピロー：${ringPillow}</p>
        <p>ヘッドセット：${headset}</p>
        <p>空間装飾：${roomDecorations}</p>
        <p>贈呈花：${giftForParents}</p>
        <p>未定：${undecided}</p>
        <p>ご相談内容： : ${description}</p>
    `
  }

  try {
    await sgMail.send(content)
    res.status(200).send('問い合わせしました')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('送信できなかったようです')
  }
}
