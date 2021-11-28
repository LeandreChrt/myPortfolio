import React, { useState, useEffect } from "react";
import imgProfile from '../assets/LeandreCHRETIENNOT.jpg'
import TextTransition, { presets } from "react-text-transition";

export default function Profil2({ Language, Text, changActive }) {

    const [PCLanguages, setPCLanguages] = useState('')
    const [iPCLanguages, setiPCLanguages] = useState(0);
    const [Languages, setLanguages] = useState('')
    const [iLangues, setILangues] = useState(0);
    const [Assoc, setAssoc] = useState('')
    const [iAssoc, setIAssoc] = useState(0);
    const [Hobbies, setHobbies] = useState('')
    const [iHobbies, setIHobbies] = useState(0);

    const Langues = [
        Text.profile.langue.titre[Language],
        Languages
    ];
    const LanguagesInfo = [
        Text.profile.language.titre[Language],
        PCLanguages
    ];
    const AssocInfo = [
        Text.profile.association.titre[Language],
        Assoc
    ];
    const HobbiesInfos = [
        Text.profile.hobbie.titre[Language],
        Hobbies
    ];

    const mouseEnter1 = () => {
        setIHobbies(1)
    }
    const mouseLeave1 = () => {
        setIHobbies(0)
    }
    const mouseEnter2 = () => {
        setIAssoc(1)
    }
    const mouseLeave2 = () => {
        setIAssoc(0)
    }
    const mouseEnter3 = () => {
        setiPCLanguages(1)
    }
    const mouseLeave3 = () => {
        setiPCLanguages(0)
    }
    const mouseEnter4 = () => {
        setILangues(1)
    }
    const mouseLeave4 = () => {
        setILangues(0)
    }

    useEffect(() => {
        changActive(0)
        let string = ''
        let count = 0
        Text.profile.language.languages.forEach(pclang => {
            if (count > 0) {
                if (count % 2 === 0) {
                    string += `\n`
                } else {
                    string += ' / '
                }
            }
            string += pclang
            count++
        });
        setPCLanguages(string)
        string = ''
        Text.profile.langue.langues.forEach(lang => {
            string += lang + `\n`
        })
        setLanguages(string)
        string = ''
        Text.profile.association.implications.forEach(assoc => {
            string += assoc + `\n`
        })
        setAssoc(string)
        string = ''
        Text.profile.hobbie.hobbies[Language].forEach(hobb => {
            string += hobb + `\n`
        })
        setHobbies(string)
    }, [])
    return (
        <div className='grid'>
            <div className='grid_col-5-dekstop grid_child'>
                <div>
                    <h1>Léandre Chretiennot</h1>
                </div>
                <div>
                    <img height="300px" src={imgProfile} alt='Léandre Chretiennot'></img>
                </div>
                <div>
                    <p><i>
                        <TextTransition
                            text={Text.profile.accroche[Language]}
                            springConfig={presets.wobbly}
                            noOverflow={true}
                        />
                    </i></p>
                </div>
                <div className="grid">
                    <h2 className="grid_col-4-dekstop">
                        <TextTransition
                            text={Text.profile.situation.titre[Language]}
                            springConfig={presets.wobbly}
                            noOverflow={true}
                        />
                    </h2>
                    <p className="content grid_col-8-dekstop">
                        <TextTransition
                            text={Text.profile.situation.text[Language]}
                            springConfig={presets.wobbly}
                            noOverflow={true}
                        />
                    </p>
                </div>
            </div>
            <div className='grid_col-7-dekstop grid_child'>
                <div className='grid grid_infos'>
                    <div onMouseEnter={mouseEnter1} onMouseLeave={mouseLeave1} className='grid_col-6-dekstop grid_child_subfloor'>
                        <TextTransition
                            className='grid_child_subfloor_child'
                            text={HobbiesInfos[iHobbies]}
                            springConfig={presets.wobbly}
                            noOverflow={true}
                        />
                    </div>
                    <div onMouseEnter={mouseEnter2} onMouseLeave={mouseLeave2} className='grid_col-6-dekstop grid_child_subfloor'>
                        <TextTransition
                            className='grid_child_subfloor_child'
                            text={AssocInfo[iAssoc]}
                            springConfig={presets.wobbly}
                            noOverflow={true}
                        />
                    </div>
                </div>
                <div className='grid grid_infos'>
                    <div onMouseEnter={mouseEnter3} onMouseLeave={mouseLeave3} className='grid_col-6-dekstop grid_child_subfloor'>
                        <TextTransition
                            className='grid_child_subfloor_child'
                            text={LanguagesInfo[iPCLanguages]}
                            springConfig={presets.wobbly}
                            noOverflow={true}
                        />
                    </div>
                    <div onMouseEnter={mouseEnter4} onMouseLeave={mouseLeave4} className='grid_col-6-dekstop grid_child_subfloor'>
                        <TextTransition
                            className='grid_child_subfloor_child'
                            text={Langues[iLangues]}
                            springConfig={presets.wobbly}
                            noOverflow={true}
                        />
                    </div>
                </div>
                <div className="grid_row" id="formations">
                    <h2 className="grid_col-12-dekstop">
                        <TextTransition
                            text={Text.profile.formation.titre[Language]}
                            springConfig={presets.wobbly}
                            noOverflow={true}
                        />
                    </h2>
                    <h3 className="grid_col-5-dekstop formation_title">Web@cadémie</h3>
                    <p className="grid_col-7-dekstop content content_left">
                        <TextTransition
                            text={Text.profile.formation.formations.wac[Language]}
                            springConfig={presets.wobbly}
                            noOverflow={true}
                        />
                    </p>
                    <p className="grid_col-7-dekstop content content_right">
                        <TextTransition
                            text={Text.profile.formation.formations.securite.infos[Language]}
                            springConfig={presets.wobbly}
                            noOverflow={true}
                        />
                    </p>
                    <h3 className="grid_col-5-dekstop formation_title">
                        <TextTransition
                            text={Text.profile.formation.formations.securite.titre[Language]}
                            springConfig={presets.wobbly}
                            noOverflow={true}
                        />
                    </h3>
                </div>
            </div>
        </div>
    )
}