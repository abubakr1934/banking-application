import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
    const loggedIn={firstName:"Abubakr"}
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || "Guest"}
                subtext="access and manage your account and transactions efficiently">

                </HeaderBox>
                <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={5690.99}
                >

                </TotalBalanceBox>
            </header>   
        </div>
    </section>
  )
}

export default Home
