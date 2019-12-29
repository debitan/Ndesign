import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import App from '../components/App'
import Divider from '../components/shared/Divider'
import FullWidthContainer from '../components/shared/FullWidthContainer'

const ImageGrid = styled('div')`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-auto-rows: 0;
    grid-auto-columns: 0;
    grid-gap: 5px;
    justify-items: center;
    margin: 30px auto;
    `

const GridImage = styled(Img)`
    width: 100%;
`

const Heading = styled('p')`
    font-size: 20px;
`

const InputWrapper = styled('div')`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: column;
    margin-bottom: 30px;
`

const CheckboxOuterWrapper = styled(InputWrapper)`
    margin: 0;
`

const CheckboxWrapper = styled(InputWrapper)`
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

    @media (min-width: 480px) {
        display: flex;
        flex-flow: row;
    }
`

const CheckboxInnerWrapper = styled('div')`
    display: flex;
    flex-flow: column;

    @media (min-width: 480px) {
        flex-flow: row;
    }
`

const CheckboxInputWrapper = styled('div')`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    @media (min-width: 480px) {
        margin-bottom: 0;
    }
`

const Input = styled('input')`
    width: 100%;
    height: 40px;
    border: 1px solid #979797;
    border-radius: 5px;
    padding: 10px;
`

const TextareaInput = styled('textarea')`
    width: 100%;
    height: 200px;
    border: 1px solid #979797;
    border-radius: 5px;
    padding: 10px;
`

const Label = styled('label')`
    min-width: fit-content;
    padding: 0 10px;
    margin: 0;
`

const CheckboxInput = styled('input')`
    height: 30px;
    width: 30px;
    appearance: none;
    border: 1px solid #979797;
    border-radius: 5px;
    outline: none;
    background-color: none;
    cursor: pointer;
    text-align: center;
    line-height: 1.8;

    :checked:after {
        content: '✓';
    }
`

const FormGrid = styled('div')`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
        grid-gap: 30px;
        grid-template-columns: 1fr 1fr;
    }
`

const ButtonWrapper = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`

const SubmitButton = styled('button')`
    width: fit-content;
    border: 3px solid black;
    border-radius: 100em;
    color: white;
    background-color: black;
    text-decoration: none;
    padding: 10px;
    margin-bottom: 10px;

    :hover {
        text-decoration: none;
        color: white;
    }

    @media (min-width: 768px) {
        width: 50%;
    }
    @media (min-width: 1000px) {
        width: 30%;
    }
    `

const DateInput = styled(Input)`
    ::-webkit-inner-spin-button { display: none; }
    ::-webkit-calendar-picker-indicator { background: transparent; }
    `

const MessageWrapper = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    margin-bottom: 20px;
    text-align: center;
`

const MainImage = styled(Img)`
    max-height: calc(100vh - 280px);
`

const EventPage = () => {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
      })

      const [inputs, setInputs] = useState({
        kanjiName: '',
        furiganaName: '',
        eventDate:'',
        eventLocation:'',
        email: '',
        phone:'',
        oneOff:'',
        regular:'',
        celebration:'',
        undecided:'',
        description: ''
      })

      const handleResponse = (status, msg) => {
        if (status === 200) {
          setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: msg }
          })
          setInputs({
            kanjiName: '',
            furiganaName: '',
            eventDate:'',
            eventLocation:'',
            email: '',
            phone:'',
            oneOff:'',
            regular:'',
            celebration:'',
            undecided:'',
            description: ''
          })
          let checkboxes = document.querySelectorAll('input[type=checkbox]')
          checkboxes.forEach(checkbox => checkbox.checked = false)
        } else {
          setStatus({
            info: { error: true, msg: msg }
          })
        }
      }

      const handleOnChange = e => {
        e.persist()
        if (e.target.type === 'checkbox') {
            setInputs(prev => ({
                ...prev,
                [e.target.id]: e.target.checked ? 'チェックあり' : ''
            }))
        } else {
        setInputs(prev => ({
          ...prev,
          [e.target.id]: e.target.value
        }))
        }
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        })
      }

      const handleOnSubmit = async e => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        const res = await fetch('/api/eventFormSend', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputs)
        })
        const text = await res.text()
        handleResponse(res.status, text)
      }

    const data = useStaticQuery(graphql`
        query EventPageQuery {
            allSanityEventsPage {
                edges {
                  node {
                    topImage {
                      asset {
                        fluid {
                          base64
                          aspectRatio
                          src
                          srcSet
                          srcWebp
                          srcSetWebp
                          sizes
                        }
                      }
                    }
                    eventImage {
                      asset {
                        fluid {
                          base64
                          aspectRatio
                          src
                          srcSet
                          srcWebp
                          srcSetWebp
                          sizes
                        }
                      }
                    }
                  }
                }
              }
            }
    `)

    const eventImage = data.allSanityEventsPage.edges[0].node.topImage.asset.fluid
    const eventImageSquare = data.allSanityEventsPage.edges[0].node.eventImage[0].asset.fluid

    return (
        <App>
            <Divider title='Event Flowers' />
            <FullWidthContainer>
                <MainImage fluid={eventImage} alt='Event flowers' />
            </FullWidthContainer>
            <ImageGrid>
                <GridImage fluid={eventImageSquare} alt='Event flowers' />
                <GridImage fluid={eventImageSquare} alt='Event flowers' />
                <GridImage fluid={eventImageSquare} alt='Event flowers' />
                <GridImage fluid={eventImageSquare} alt='Event flowers' />
                <GridImage fluid={eventImageSquare} alt='Event flowers' />
                <GridImage fluid={eventImageSquare} alt='Event flowers' />
            </ImageGrid>
            <Heading>短発装飾</Heading>
            <ul>
                <li>会場訪問希望</li>
                <li>会場訪問希望</li>
                <li>会場訪問希望</li>
            </ul>
            <Heading>短発装飾</Heading>
            <ul>
                <li>会場訪問希望</li>
                <li>会場訪問希望</li>
                <li>会場訪問希望</li>
            </ul>
            <Heading>短発装飾</Heading>
            <ul>
                <li>会場訪問希望</li>
                <li>会場訪問希望</li>
                <li>会場訪問希望</li>
                <li>会場訪問希望</li>
            </ul>
            <Divider title='Event Contact Form' justify='flex-start' />
            <form onSubmit={handleOnSubmit} id='eventForm'>
                <FormGrid>
                    <div>
                        <InputWrapper>
                            <label for='name'>お名前 *</label>
                            <Input type='text' name='kanjiName' id='kanjiName' onChange={handleOnChange} required value={inputs.kanjiName} />
                        </InputWrapper>
                        <InputWrapper>
                            <label for='name'>フリガナ *</label>
                            <Input type='text' name='furiganaName' id='furiganaName' onChange={handleOnChange} required value={inputs.furiganaName} />
                        </InputWrapper>
                        <InputWrapper>
                            <label for='name'>イベント予定日 *</label>
                            <DateInput type='date' name='eventDate' id='eventDate' onChange={handleOnChange} required value={inputs.eventDate} />
                        </InputWrapper>
                        <InputWrapper>
                            <label for='name'>イベント予定会場 *</label>
                            <Input type='text' name='eventLocation' id='eventLocation' onChange={handleOnChange} required value={inputs.eventLocation} />
                        </InputWrapper>
                    </div>
                    <div>
                        <InputWrapper>
                            <label for='name'>Email *</label>
                            <Input type='email' name='email' id='email' onChange={handleOnChange} required value={inputs.email} />
                        </InputWrapper>
                        <InputWrapper>
                            <label for='name'>電話番号</label>
                            <Input type='tel' name='phone' id='phone' onChange={handleOnChange} value={inputs.phone} />
                        </InputWrapper>
                    </div>
                </FormGrid>
                <CheckboxOuterWrapper>
                    <label>種類</label>
                    <CheckboxWrapper>
                        <CheckboxInnerWrapper>
                        <CheckboxInputWrapper>
                        <CheckboxInput type='checkbox' name='oneOff' id='oneOff' onChange={handleOnChange} value={inputs.oneOff} />
                        <Label for='oneOff'>短発装飾</Label>
                        </CheckboxInputWrapper>
                        <CheckboxInputWrapper>
                        <CheckboxInput type='checkbox' name='regular' id='regular' onChange={handleOnChange} value={inputs.regular} />
                        <Label for='regular'>定期装花</Label>
                        </CheckboxInputWrapper>
                        </CheckboxInnerWrapper>
                        <CheckboxInnerWrapper>
                        <CheckboxInputWrapper>
                        <CheckboxInput type='checkbox' name='celebration' id='celebration' onChange={handleOnChange} value={inputs.celebration} />
                        <Label for='celebration'>お祝い花</Label>
                        </CheckboxInputWrapper>
                        <CheckboxInputWrapper>
                        <CheckboxInput type='checkbox' name='undecided' id='undecided' onChange={handleOnChange} value={inputs.undecided} />
                        <Label for='undecided'>未定</Label>
                        </CheckboxInputWrapper>
                        </CheckboxInnerWrapper>
                    </CheckboxWrapper>
                </CheckboxOuterWrapper>
                <InputWrapper>
                    <label for='description'>ご相談内容 *</label>
                    <TextareaInput name='description' id='description' onChange={handleOnChange} required value={inputs.description} />
                </InputWrapper>
                <ButtonWrapper>
                    <SubmitButton type="submit" disabled={status.submitting}>
                        {!status.submitting
                            ? !status.submitted
                                ? '問い合わせする'
                                : status.info.msg
                        : '問い合わせ中'}
                    </SubmitButton>
                </ButtonWrapper>
            </form>
            {!status.info.error && status.info.msg &&
                <MessageWrapper>
                <h2>Thank you</h2>
                <p>２営業日以内にご返信差し上げます。暫しお待ち頂きますよう、お願い致します。</p>
                </MessageWrapper>
            }
            {status.info.error && (
                <MessageWrapper>
                <h2>Sorry...</h2>
                <p>送信できなかったようです。後程、再送信してください。</p>
                </MessageWrapper>
            )}
        </App>
    )
}

export default EventPage
