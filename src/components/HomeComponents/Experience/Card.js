import React from 'react';

import styled from 'styled-components';
import moment from 'moment'
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

import Tooltip from '@mui/material/Tooltip'
import { CardImg } from '../utils/CardImg'
import { WorkCard } from '../utils/WorkCard'

const Container = styled.div`


`
const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const SubTitle = styled.div`
`
const Content = styled.div`
`
const Period = styled.div`
`
const ImageContainer = styled.div`
    height: 100px;;
`
const RenderPeriod = ({ months } ) => {
    if (months%12) {
        return '( ' +  Math.floor(months/12) + '.' + months%12 + '+ YOE' +  ' )'
    }
    return '( ' + months/12 + '+ YOE )' 
}

const RenderDate = ({ start, end, is_current }) => {
    return start.format('MMM-YYYY') +' to ' + (is_current ? 'Present' : end.format('MMM-YYYY')) + ' '
}

export const Card = (
    { company, company_type, join_date, profile, end_date, is_current, img, link  }
) => {
    const [jday, jmonth, jyear] = (join_date +'').split('/');
    const [eday, emonth, eyear] = (end_date || '').split('/');
    const start = moment([jyear, jmonth, jday]);
    const end = is_current ? moment() : moment([eyear, emonth, eday]);
    console.log(end, start, join_date.slice('/'))
    const months = end.diff(start, 'month');
    
    const compnayLogo = () => {
        return <CorporateFareIcon color="orange" icon="corporate_fare" />
      
    }
    return <Container>
        <WorkCard
        is_current={is_current}
            title={<Title>
                {company} {' '}
                <Tooltip title={company_type}>
                {compnayLogo()}
    </Tooltip>
              
                
            </Title>
            }
            subtitle={
                <SubTitle>
                    {profile}
                    <Period>
            <RenderDate start={start} end={end} is_current={is_current} />
            <RenderPeriod months={months} />
        </Period>
                </SubTitle>}
                imgUrl={require(`../../../images/${img}`)}
                learnMore={link}
                imageTitle={company}
        />
        
    </Container>
}