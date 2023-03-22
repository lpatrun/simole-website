import React, { useState } from 'react'
import TeamMember from './TeamMember'

const TEAM_MEMBERS = [
    {
        id: 'ndhd4-frd34-s3f3x-4dgt4',
        imageURL: require('../../../assets/avatarJoe.jpeg'),
        imageAlt: 'Avatar Joe',
        teamMember: 'Johnny Walker',
        jobPosition: 'Web Designer',
    },
    {
        id: '521d-a955a-416bd-93303-91966',
        imageURL: require('../../../assets/avatarJoe.jpeg'),
        imageAlt: 'Avatar Joe',
        teamMember: 'Rebecca Flex',
        jobPosition: 'Support',
    },
    {
        id: 'ndhd4-r1234-s3f3x-4dgt4',
        imageURL: require('../../../assets/avatarJoe.jpeg'),
        imageAlt: 'Avatar Joe',
        teamMember: 'Jan Ringo',
        jobPosition: 'Boss man',
    },
    {
        id: 'ndhd4-abcde-s3f3x-4dgt4',
        imageURL: require('../../../assets/avatarJoe.jpeg'),
        imageAlt: 'Avatar Joe',
        teamMember: 'Kai Ringo',
        jobPosition: 'Fixer',
    },
]

const LATIN_PHRASES = [
    'Veni, vidi, vici.',
    'Alea iacta est.',
    'Carpe diem.',
    'Cogito, ergo sum.',
    'In vino veritas.',
    'Et tu, Brute?',
    'Acta, non verba.',
    'Carthago delenda est.',
    'Ad hominem',
    'Quid pro quo',
]

export default function MainComponent() {
    return (
        <main>
            <section className="banner">
                <a href="https://www.w3schools.com">learn w3.css</a>
            </section>

            <section className="ourTeam" id="ourTeam">
                <h1>our team</h1>
                <p>Meet the team - our office rats:</p>

                <div className="team">
                    {TEAM_MEMBERS.map((member) => (
                        <TeamMember
                            key={member.id}
                            imageURL={member.imageURL}
                            imageAlt={member.imageAlt}
                            teamMember={member.teamMember}
                            jobPosition={member.jobPosition}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}
