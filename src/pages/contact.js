import React, { useState } from 'react'
import styled from 'styled-components'

import App from '../components/App'
import ColumnDivider from '../components/shared/ColumnDivider'
import AccordionCard from '../components/shared/AccordionCard'

import contact from '../images/contact.svg'
import faqs from '../images/faqs.svg'

const Accordion = styled('div')`
    padding-bottom: 30px;
`

const ContactPage = () => {
    const [expanded, setExpanded] = useState(['0'])

    return (
        <App>
            <ColumnDivider
                svg={contact}
                alt='Contact'
                JPTitle='お問い合わせ'
            />
            <p>
                ±Ndesignはオンライン専門のフローリストです。
            </p>
            <p>
                よく分からないことや質問などございましたら<a href='mailto:plusorminuswebdesign@gmail.com'>plusorminus.ndesign@gmail.com</a>まで何なりとご連絡ください。
                <br />
                合わせて、下記のよくあるご質問もご確認ください。
            </p>
            <ColumnDivider
                svg={faqs}
                alt='FAQs'
                JPTitle='よくあるご質問'
            />
            <Accordion>
                <AccordionCard
                    headerText='最短発送はいつですか？'
                    bodyText='ご注文を頂いてから全てのオーダーには3日から1週間を時間をいただいております。'
                    defaultOpen={true}
                />
                <AccordionCard
                    headerText='ギフトラッピングはできますか？'
                    bodyText='全てのShop商品のものにおいて、お渡し時、配送時はギフトラッピングをさせていただいております。'
                    bodyText2='透明のセロハン、リボン、ボックス、にて、ラッピングさせていただいております。'
                />
                <AccordionCard
                    headerText='送料はいくらですか？'
                    bodyText='送料は全国一律1,000円となります。'
                />
                <AccordionCard
                    headerText='返品、交換はできますか？'
                    bodyText='大変申し訳ございません。万一トラブルなどで返品交換ご希望されましても、承りますせんのでご理解いただきますようよろしくお願いします。'
                />
                <AccordionCard
                    headerText='注文後の変更・キャンセルはできますか？'
                    bodyText='注文後30分以内であれば変更・キャンセル承ることができます。こちらよりメール頂きますようお願い致します。'
                />
                <AccordionCard
                    headerText='クレジットカード以外決済方法はできますか？'
                    bodyText='当ホームページでは銀行振込及びクレジットカード決済のみ承っております。'
                    bodyText2='銀行振込をご希望の場合はご連絡頂きますよう、お願い致します。'
                />
            </Accordion>
        </App>
    )
}

export default ContactPage
