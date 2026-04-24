const fs = require('fs');

const cssToAppend = `

/* --- INDIVIDUAL BOX CONTROLS --- */
/* Change the top/left numbers to nudge specific boxes around individually! */

.ach-card:nth-child(1) { top: 0px; left: 0px; } /* Box 1 */
.ach-card:nth-child(2) { top: 0px; left: 0px; } /* Box 2 */
.ach-card:nth-child(3) { top: 0px; left: 0px; } /* Box 3 */
.ach-card:nth-child(4) { top: 0px; left: 0px; } /* Box 4 */
.ach-card:nth-child(5) { top: 0px; left: 0px; } /* Box 5 */
.ach-card:nth-child(6) { top: 0px; left: 0px; } /* Box 6 */
.ach-card:nth-child(7) { top: 0px; left: 0px; } /* Box 7 */
.ach-card:nth-child(8) { top: 0px; left: 0px; } /* Box 8 */
`;

fs.appendFileSync('src/index.css', cssToAppend);
console.log('Individual CSS controls appended successfully!');
