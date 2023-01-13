import React from 'react';
import "./recentUpload.css"
import { BiFile, BiExclude, BiVideo, BiImage } from 'react-icons/bi';

const iconStyleOne = { color: '#8804e085', fontSize: '30px', padding: "3px" };
const iconStyleTwo = { color: '#e08003e7', fontSize: '30px', padding: "3px" };
const iconStyleThree = { color: '#07b35dbd', fontSize: '30px', padding: "3px" };
const iconStyleFour = { color: '#ff00009f', fontSize: '30px', padding: "3px" };

export default function RecentUpload() {
    return (
        <div className='recent__uploads'>
            <h2>RECENT UPLOAD FILES</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Owner</th>
                    <th>Last modified</th>
                </tr>
                <tr>
                    <td>
                        <BiImage style={iconStyleTwo} /><span>Profile.png</span>
                    </td>
                    <td>14 MBS</td>
                    <td>Muhire Patrick</td>
                    <td>January, 24 2022</td>
                </tr>
                <tr>
                    <td>
                        <BiVideo style={iconStyleThree} /><span>myvid.mp4</span>
                    </td>
                    <td>134MBS</td>
                    <td>Muhire Patrick</td>
                    <td>January, 24 2022</td>
                </tr>
                <tr>
                    <td>
                        <BiFile style={iconStyleOne} /><span>Hello.docx</span>
                    </td>
                    <td>134MBS</td>
                    <td>Muhire Patrick</td>
                    <td>January, 24 2022</td>
                </tr>
                <tr>
                    <td>
                        <BiExclude style={iconStyleFour} /><span>Hello.docx</span>
                    </td>
                    <td>134MBS</td>
                    <td>Muhire Patrick</td>
                    <td>January, 24 2022</td>
                </tr>
                <tr>
                    <td>
                        <BiFile style={iconStyleOne} /><span>Hello.docx</span>
                    </td>
                    <td>134MBS</td>
                    <td>Muhire Patrick</td>
                    <td>January, 24 2022</td>
                </tr>
                <tr>
                    <td>
                        <BiImage style={iconStyleTwo} /><span>Hello.docx</span>
                    </td>
                    <td>134MBS</td>
                    <td>Muhire Patrick</td>
                    <td>January, 24 2022</td>
                </tr>
                <tr>
                    <td>
                        <BiVideo style={iconStyleThree} /><span>Hello.docx</span>
                    </td>
                    <td>134MBS</td>
                    <td>Muhire Patrick</td>
                    <td>January, 24 2022</td>
                </tr>
            </table>
        </div>
    )
}
