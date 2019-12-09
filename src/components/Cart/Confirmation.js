import React from 'react'
import styled from 'styled-components'

import MyContext from '../MyContext'
import JPText from '../shared/JPText'
import StyledContainer from '../shared/StyledContainer'
import ConfirmationProduct from './ConfirmationProduct'
import StyledHr from '../shared/StyledHr'
import MobileHr from '../shared/MobileHr'

const Wrapper = styled('div')`
    padding: 30px 0 30px 0;
`

const StyledDiv = styled('div')`
    padding-top: 10px;

    @media (min-width: 900px) {
    min-width: fit-content;
    padding: 30px 30px 0 0;
    }
`

const InformationTitle = styled('p')`
    color: grey;
    text-decoration: underline;
`

const PriceWrapper = styled('div')`
    display: flex;
    justify-content: flex-end;
`

const TotalHr = styled(StyledHr)`
    width: 33%;
    margin-right: 0;
`

function Confirmation ({
    orderId,
    last4,
    kanjiName,
    postcode,
    addressLine1,
    addressLine2,
    phone,
    totalCost
}) {
    const { setItemsInBasket } = React.useContext(MyContext)

    window.onbeforeunload = () => setItemsInBasket([])

    return (
        <MyContext.Consumer>
        {context => (
            <Wrapper>
            <br/>
            <h1>Thank you</h1>
            <br/>
            <p>ご注文頂き誠にありがとうございます。</p>
            <p>確認メールを送信しましたので、合わせてご確認ください。</p>
            <br/>
            <p>ご注文を頂いてから全てに心を込めてお作り致しますので、商品到着まで今しばらくお待ちください。</p>
            <StyledContainer>
            <StyledDiv>
            <h1>Order Information</h1>
            </StyledDiv>
            <StyledDiv>
            <JPText>ご注文内容</JPText>
            </StyledDiv>
            </StyledContainer>
            <StyledHr />
            <MobileHr />
            <InformationTitle>注文番号</InformationTitle>
            <p>{orderId}</p>
            <InformationTitle>注文日</InformationTitle>
            <p>{new Intl.DateTimeFormat('ja-JP',{ year: 'numeric', month: 'long', day: 'numeric' }).format(Date.now())}</p>
            <InformationTitle>決済方法</InformationTitle>
            <p>クレジットカード　**** **** **** {last4}</p>
            <InformationTitle>配達先</InformationTitle>
            <p>{kanjiName}</p>
            <p>{postcode}</p>
            <p>{addressLine1}</p>
            {addressLine2 && <p>{addressLine2}</p>}
            {phone && <p>{phone}</p>}
            <StyledContainer>
            <StyledDiv>
            <h1>Item Information</h1>
            </StyledDiv>
            <StyledDiv>
            <JPText>商品内容</JPText>
            </StyledDiv>
            </StyledContainer>
            <StyledHr />
            <MobileHr />
            {context.itemsInBasket.map(item =>
                (
                    <ConfirmationProduct
                        key={item.title}
                        title={item.title}
                        slug={item.slug}
                        price={item.price}
                        flower={item.flower}
                        type={item.type}
                        size={item.size}
                        quantity={item.quantity}
                        image={item.image}
                    />)
            )}
            <PriceWrapper>
                <p>小計　　{Number(totalCost).toLocaleString('jp')}</p>
            </PriceWrapper>
            <PriceWrapper>
                <p>送料　　1,000</p>
            </PriceWrapper>
            <TotalHr />
            <MobileHr />
            <PriceWrapper>
                <p>合計　消費税込　{Number(totalCost + 1000).toLocaleString('jp')}</p>
            </PriceWrapper>
            </Wrapper>
        )}
        </MyContext.Consumer>
    )
}

export default Confirmation
