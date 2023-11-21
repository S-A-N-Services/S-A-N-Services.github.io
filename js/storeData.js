window.onload = function () {
    console.log("in");
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        localStorage.setItem('formData', JSON.stringify(data));
        // syncData();
        // window.location.href = '../template/content.html';
        // console.log("Redirecting to content.html");
        downloadWordFile("Word-Report",);

        // Redirect or perform other actions if needed
    });

    // Check if there is stored data and insert it into the template
    const storedData = localStorage.getItem('formData');
    if (true) {
        // Parse the JSON string back to an object
        const parsedData = JSON.parse(storedData);

        // Fetch the content.html template using fetch API
        fetch('../template/content.html')
            .then(response => response.text())
            .then(htmlTemplate => {
                // Replace placeholders in the template with stored data
                Object.keys(parsedData).forEach(key => {
                    const regex = new RegExp(`{{${key}}}`, 'g');
                    htmlTemplate = htmlTemplate.replace(regex, parsedData[key]);
                });

                // Insert the modified template into a container (e.g., a div)
                const container = document.getElementById('templateContainer');
                if (container) {
                    container.innerHTML = htmlTemplate;

                    // You can also update specific elements with the data
                    const title = document.getElementById('title');
                    const ref = document.getElementById('ref');
                    const auth = document.getElementById('auth');
                    const vN = document.getElementById('vN');
                    const vD = document.getElementById('vD');
                    const status = document.getElementById('status');
                    const notes = document.getElementById('notes');
                    const cV = document.getElementById('cV');
                    const cD = document.getElementById('cD');
                    const cA = document.getElementById('cA');
                    const cC = document.getElementById('cC');
                    const cR = document.getElementById('cR');
                    const cE = document.getElementById('cE');
                    const aD = document.getElementById('aD');
                    const aN = document.getElementById('aN');
                    const aP = document.getElementById('aP');
                    const aS = document.getElementById('aS');
                    const rD = document.getElementById('rD');
                    const rN = document.getElementById('rN');
                    const rP = document.getElementById('rP');
                    const rS = document.getElementById('rS');
                    const riD = document.getElementById('riD');
                    const riN = document.getElementById('riN');
                    const riP = document.getElementById('riP');
                    const riS = document.getElementById('riS');
                    const apD = document.getElementById('apD');
                    const apN = document.getElementById('apN');
                    const apP = document.getElementById('apP');
                    const apS = document.getElementById('apS');
                    const eD = document.getElementById('eD');
                    const eN = document.getElementById('eN');
                    const eP = document.getElementById('eP');
                    const eS = document.getElementById('eS');

                    if (true) {
                        title.textContent = parsedData['title'];
                        ref.textContent = parsedData['ref'];
                        auth.textContent = parsedData['auth'];
                        vN.textContent = parsedData['vN'];
                        vD.textContent = parsedData['vD'];
                        status.textContent = parsedData['status'];
                        notes.textContent = parsedData['notes'];
                        cV.textContent = parsedData['cV'];
                        cD.textContent = parsedData['cD'];
                        cA.textContent = parsedData['cA'];
                        cC.textContent = parsedData['cC'];
                        cR.textContent = parsedData['cR'];
                        cE.textContent = parsedData['cE'];
                        aD.textContent = parsedData['aD'];
                        aN.textContent = parsedData['aN'];
                        aP.textContent = parsedData['aP'];
                        aS.textContent = parsedData['aS'];
                        rD.textContent = parsedData['rD'];
                        rN.textContent = parsedData['rN'];
                        rP.textContent = parsedData['rP'];
                        rS.textContent = parsedData['rS'];
                        riD.textContent = parsedData['riD'];
                        riN.textContent = parsedData['riN'];
                        riP.textContent = parsedData['riP'];
                        riS.textContent = parsedData['riS'];
                        apD.textContent = parsedData['apD'];
                        apN.textContent = parsedData['apN'];
                        apP.textContent = parsedData['apP'];
                        apS.textContent = parsedData['apS'];
                        eD.textContent = parsedData['eD'];
                        eN.textContent = parsedData['eN'];
                        eP.textContent = parsedData['eP'];
                        eS.textContent = parsedData['eS'];
                        console.log(title);
                        console.log(parsedData['title']);
                        
                    }
                    console.log(parsedData['title']);

                }

            })
            .catch(error => console.error('Error fetching template:', error));
            console.log(title);
            console.log(parsedData['title']);

    }

}


function syncData(){
    // Check if there is stored data and insert it into the template
    const storedData = localStorage.getItem('formData');
    if (true) {
        // Parse the JSON string back to an object
        const parsedData = JSON.parse(storedData);

        // Fetch the content.html template using fetch API
        fetch('../template/content.html')
            .then(response => response.text())
            .then(htmlTemplate => {
                // Replace placeholders in the template with stored data
                Object.keys(parsedData).forEach(key => {
                    const regex = new RegExp(`{{${key}}}`, 'g');
                    htmlTemplate = htmlTemplate.replace(regex, parsedData[key]);
                });

                // Insert the modified template into a container (e.g., a div)
                const container = document.getElementById('templateContainer');
                if (container) {
                    container.innerHTML = htmlTemplate;

                    // You can also update specific elements with the data
                    const title = document.getElementById('title');
                    const ref = document.getElementById('ref');
                    const auth = document.getElementById('auth');
                    const vN = document.getElementById('vN');
                    const vD = document.getElementById('vD');
                    const status = document.getElementById('status');
                    const notes = document.getElementById('notes');
                    const cV = document.getElementById('cV');
                    const cD = document.getElementById('cD');
                    const cA = document.getElementById('cA');
                    const cC = document.getElementById('cC');
                    const cR = document.getElementById('cR');
                    const cE = document.getElementById('cE');
                    const aD = document.getElementById('aD');
                    const aN = document.getElementById('aN');
                    const aP = document.getElementById('aP');
                    const aS = document.getElementById('aS');
                    const rD = document.getElementById('rD');
                    const rN = document.getElementById('rN');
                    const rP = document.getElementById('rP');
                    const rS = document.getElementById('rS');
                    const riD = document.getElementById('riD');
                    const riN = document.getElementById('riN');
                    const riP = document.getElementById('riP');
                    const riS = document.getElementById('riS');
                    const apD = document.getElementById('apD');
                    const apN = document.getElementById('apN');
                    const apP = document.getElementById('apP');
                    const apS = document.getElementById('apS');
                    const eD = document.getElementById('eD');
                    const eN = document.getElementById('eN');
                    const eP = document.getElementById('eP');
                    const eS = document.getElementById('eS');

                    if (true) {
                        title.textContent = parsedData['title'];
                        ref.textContent = parsedData['ref'];
                        auth.textContent = parsedData['auth'];
                        vN.textContent = parsedData['vN'];
                        vD.textContent = parsedData['vD'];
                        status.textContent = parsedData['status'];
                        notes.textContent = parsedData['notes'];
                        cV.textContent = parsedData['cV'];
                        cD.textContent = parsedData['cD'];
                        cA.textContent = parsedData['cA'];
                        cC.textContent = parsedData['cC'];
                        cR.textContent = parsedData['cR'];
                        cE.textContent = parsedData['cE'];
                        aD.textContent = parsedData['aD'];
                        aN.textContent = parsedData['aN'];
                        aP.textContent = parsedData['aP'];
                        aS.textContent = parsedData['aS'];
                        rD.textContent = parsedData['rD'];
                        rN.textContent = parsedData['rN'];
                        rP.textContent = parsedData['rP'];
                        rS.textContent = parsedData['rS'];
                        riD.textContent = parsedData['riD'];
                        riN.textContent = parsedData['riN'];
                        riP.textContent = parsedData['riP'];
                        riS.textContent = parsedData['riS'];
                        apD.textContent = parsedData['apD'];
                        apN.textContent = parsedData['apN'];
                        apP.textContent = parsedData['apP'];
                        apS.textContent = parsedData['apS'];
                        eD.textContent = parsedData['eD'];
                        eN.textContent = parsedData['eN'];
                        eP.textContent = parsedData['eP'];
                        eS.textContent = parsedData['eS'];
                        console.log(title);
                        console.log(parsedData['title']);
                        
                    }
                    console.log(parsedData['title']);

                }

            })
            .catch(error => console.error('Error fetching template:', error));
            console.log(title);
            console.log(parsedData['title']);

    }
}

async function downloadWordFile(fileName) {
    // Check if there is stored data and insert it into the template
    const storedData = localStorage.getItem('formData');
    // Parse the JSON string back to an object
    const parsedData = JSON.parse(storedData);
    console.log(parsedData['title']);
    const title = parsedData['title'];
    const ref = parsedData['ref'];
    const auth = parsedData['auth'];
    const vN = parsedData['vN'];
    const vD = parsedData['vD'];
    const status = parsedData['status'];
    const notes = parsedData['notes'];
    const cV = parsedData['cV'];
    const cD = parsedData['cD'];
    const cA = parsedData['cA'];
    const cC = parsedData['cC'];
    const cR = parsedData['cR'];
    const cE = parsedData['cE'];
    const aD = parsedData['aD'];
    const aN = parsedData['aN'];
    const aP = parsedData['aP'];
    const aS = parsedData['aS'];
    const rD = parsedData['rD'];
    const rN = parsedData['rN'];
    const rP = parsedData['rP'];
    const rS = parsedData['rS'];
    const riD = parsedData['riD'];
    const riN = parsedData['riN'];
    const riP = parsedData['riP'];
    const riS = parsedData['riS'];
    const apD = parsedData['apD'];
    const apN = parsedData['apN'];
    const apP = parsedData['apP'];
    const apS = parsedData['apS'];
    const eD = parsedData['eD'];
    const eN = parsedData['eN'];
    const eP = parsedData['eP'];
    const eS = parsedData['eS'];
        if (true) {
        }

    try {
        console.log("print");
        
        // Fetch the content template
        const response = await fetch('../template/content.html');
        const templateText = await response.text();

        // Create a Blob from the filled template
        const blob = new Blob([templateText , 
            `<td colspan="6" style="width:447.9pt;border-top:solid windowtext 1.0pt;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid black 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:  52.75pt;">
            <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:normal;'><strong><span style="font-size:19px;color:black;">Initial Safety Impact Assessment&nbsp;</span></strong></p>
        </td>
    </tr>
    <tr>
        <td style="width: 58.1pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;height: 17.4pt;vertical-align: bottom;">
            <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style="font-size:13px;color:black;">Form NO.</span></strong></p>
        </td>
        <td style="width: 120.45pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;height: 17.4pt;vertical-align: bottom;">
            <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style="font-size:13px;color:black;">SANS-SQE-PMM02-FO21</span></p>
        </td>
        <td style="width: 45.85pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;height: 17.4pt;vertical-align: bottom;">
            <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style="font-size:13px;color:black;">Revision</span></strong></p>
        </td>
        <td style="width: 75.7pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;height: 17.4pt;vertical-align: bottom;">
            <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style="font-size:13px;color:black;">B</span></p>
        </td>
        <td style="width: 59.7pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;height: 17.4pt;vertical-align: bottom;">
            <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style="font-size:13px;color:black;">Issue Date:</span></strong></p>
        </td>
        <td style="width: 88.1pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;height: 17.4pt;vertical-align: bottom;">
            <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style="font-size:13px;color:black;">31/08/2022</span></p>
        </td>
    </tr>
</tbody>
</table>
</div>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:12.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:53.85pt;text-indent:-53.85pt;font-size:21px;font-family:"Arial",sans-serif;color:blue;font-weight:bold;'>Document Information</p>
<table style="border: none;margin-left:53.85pt;border-collapse:collapse;">
<tbody>
<tr>
    <td style="width: 120.55pt;border: 1pt solid windowtext;background: rgb(84, 141, 212);padding: 0in 5.4pt;height: 18.3pt;vertical-align: top;">
        <p style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'><strong><span  style="color:white;">Document title</span></strong></p>
    </td>
    <td style="width: 278.95pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;background: rgb(84, 141, 212);padding: 0in 5.4pt;height: 18.3pt;vertical-align: top;">
        <p  style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'><span id="title" style="color:white;">`,title,`</span></p>
    </td>
</tr>
<tr>
    <td style="width: 120.55pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0in 5.4pt;height: 18.45pt;vertical-align: top;">
        <p style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'><strong>Document reference</strong></p>
    </td>
    <td style="width: 278.95pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;height: 18.45pt;vertical-align: top;">
        <p id="ref" style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'`,ref,`</p>
    </td>
</tr>
<tr>
    <td style="width: 120.55pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0in 5.4pt;height: 18.45pt;vertical-align: top;">
        <p style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'><strong>Document author</strong></p>
    </td>
    <td style="width: 278.95pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;height: 18.45pt;vertical-align: top;">
        <p id="auth" style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'>&`,auth,`</p>
    </td>
</tr>
<tr>
    <td style="width: 120.55pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0in 5.4pt;height: 18.45pt;vertical-align: top;">
        <p style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'><strong>Version number</strong></p>
    </td>
    <td style="width: 278.95pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;height: 18.45pt;vertical-align: top;">
        <p id="vN" style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'>`,vN,`</p>
    </td>
</tr>
<tr>
    <td style="width: 120.55pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0in 5.4pt;height: 18.45pt;vertical-align: top;">
        <p style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'><strong>Version date</strong></p>
    </td>
    <td style="width: 278.95pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;height: 18.45pt;vertical-align: top;">
        <p id="vD" style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'>`,vD,`</p>
    </td>
</tr>
<tr>
    <td style="width: 120.55pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0in 5.4pt;height: 18.45pt;vertical-align: top;">
        <p style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'><strong>Status&nbsp;</strong></p>
    </td>
    <td style="width: 278.95pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;height: 18.45pt;vertical-align: top;">
        <p id="status" style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'>`,status,`</p>
    </td>
</tr>
<tr>
    <td style="width: 120.55pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0in 5.4pt;height: 18.45pt;vertical-align: top;">
        <p style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'><strong>Notes</strong></p>
    </td>
    <td style="width: 278.95pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;height: 18.45pt;vertical-align: top;">
        <p id="notes" style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'>`,`notes`,`</p>
    </td>
</tr>
</tbody>
</table>
<p style='margin-top:12.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:53.85pt;text-indent:-53.85pt;font-size:21px;font-family:"Arial",sans-serif;color:blue;font-weight:bold;'>Change Record</p>
<table style="border: none;margin-left:53.85pt;border-collapse:collapse;">
<tbody>
<tr>
    <td style="width:53.95pt;border:solid windowtext 1.0pt;background:  #548DD4;padding:0in 0in 0in 0in;height:18.3pt;">
        <p style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;text-align:center;'><strong><span style="color:white;">Version</span></strong></p>
    </td>
    <td style="width:63.3pt;border:solid windowtext 1.0pt;border-left:  none;background:#548DD4;padding:0in 5.4pt 0in 5.4pt;height:18.3pt;">
        <p style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;text-align:center;'><strong><span style="color:white;">Date</span></strong></p>
    </td>
    <td style="width:78.4pt;border:solid windowtext 1.0pt;border-left:  none;background:#548DD4;padding:0in 5.4pt 0in 5.4pt;height:18.3pt;">
        <p style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;text-align:center;'><strong><span style="color:white;">Author</span></strong></p>
    </td>
    <td style="width:63.75pt;border:solid windowtext 1.0pt;border-left:  none;background:#548DD4;padding:0in 5.4pt 0in 5.4pt;height:18.3pt;">
        <p style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;text-align:center;'><strong><span style="color:white;">Change Description</span></strong></p>
    </td>
    <td style="width:71.2pt;border:solid windowtext 1.0pt;border-left:  none;background:#548DD4;padding:0in 5.4pt 0in 5.4pt;height:18.3pt;">
        <p style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;text-align:center;'><strong><span style="color:white;">Reviewed by</span></strong></p>
    </td>
    <td style="width:.95in;border:solid windowtext 1.0pt;border-left:  none;background:#548DD4;padding:0in 5.4pt 0in 5.4pt;height:18.3pt;">
        <p style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;text-align:center;'><strong><span style="color:white;">Effective Date</span></strong></p>
    </td>
</tr>
<tr>
    <td style="width:53.95pt;border:solid windowtext 1.0pt;border-top:  none;padding:0in 0in 0in 0in;height:18.3pt;">
        <p id="cV" style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'>`,cV,`</p>
    </td>
    <td style="width:63.3pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:18.3pt;">
        <p id="cD" style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'>`,cD,`</p>
    </td>
    <td style="width:78.4pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:18.3pt;">
        <p id="cA" style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'>`,cA,`</p>
    </td>
    <td style="width:63.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:18.3pt;">
        <p id="cC" style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'>`,cC,`</p>
    </td>
    <td style="width:71.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:18.3pt;">
        <p id="cR" style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'>`,cR,`</p>
    </td>
    <td style="width:.95in;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:18.3pt;">
        <p id="cE" style='margin-top:3.0pt;margin-right:0in;margin-bottom:3.0pt;margin-left:0in;font-size:12px;font-family:"Arial",sans-serif;'>`,cE,`</p>
    </td>
</tr>
</tbody>
</table>
<p style='margin-top:12.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:53.85pt;text-indent:-53.85pt;font-size:21px;font-family:"Arial",sans-serif;color:blue;font-weight:bold;'>Document Approval</p>
<table style="margin-left:53.85pt;border-collapse:collapse;border:none;">
<tbody>
<tr>
    <td colspan="4" style="width: 399.5pt;border: 1pt solid windowtext;background: rgb(84, 141, 212);padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><strong><span style="font-size:12px;color:white;">Authored by</span></strong></p>
    </td>
</tr>
<tr>
    <td style="width: 99.85pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="aD" style="font-size:12px;">`,aD,`</span></em></p>
    </td>
    <td style="width: 99.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="aN" style="font-size:12px;">`,aN,`</span></em></p>
    </td>
    <td style="width: 99.85pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="aP" style="font-size:12px;">`,aP,`</span></em></p>
    </td>
    <td style="width: 99.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="aS" style="font-size:12px;">`,aS,`</span></em></p>
    </td>
</tr>
<tr>
    <td colspan="4" style="width: 399.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;background: rgb(84, 141, 212);padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><strong><span style="font-size:12px;color:white;">Reviewed by</span></strong></p>
    </td>
</tr>
<tr>
    <td style="width: 99.85pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0in 5.4pt;vertical-align: top;">
        <p style='height:50px; margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="rD" style="font-size:12px;">`,rD,`</span></em></p>
    </td>
    <td style="width: 99.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="rN" style="font-size:12px;">`,rN,`</span></em></p>
    </td>
    <td style="width: 99.85pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="rP" style="font-size:12px;">`,rP,`</span></em></p>
    </td>
    <td style="width: 99.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;vertical-align: top;">
        <p style='height:50px; margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="rS" style="font-size:12px;">`,rS,`</span></em></p>
    </td>
</tr>
<tr>
    <td colspan="4" style="width: 399.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;background: rgb(84, 141, 212);padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><strong><span style="font-size:12px;color:white;">Risk accepted by</span></strong><a href="#_ftn1" name="_ftnref1" title=""><span style="vertical-align:super;"><strong><span style="font-size:12px;color:white;"><span style="vertical-align:super;"><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:white;'>[1]</span></strong></span></span></strong></span></a></p>
    </td>
</tr>
<tr>
    <td style="width: 99.85pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="riD" style="font-size:12px;">`,riD,`</span></em></p>
    </td>
    <td style="width: 99.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="riN" style="font-size:12px;">`,riN,`</span></em></p>
    </td>
    <td style="width: 99.85pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="riP" style="font-size:12px;">`,riP,`</span></em></p>
    </td>
    <td style="width: 99.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="riS" style="font-size:12px;">`,riS,`</span></em></p>
    </td>
</tr>
<tr>
    <td colspan="4" style="width: 399.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;background: rgb(84, 141, 212);padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><strong><span style="font-size:12px;color:white;">Approved by</span></strong></p>
    </td>
</tr>
<tr>
    <td style="width: 99.85pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="aD" style="font-size:12px;">`,aD,`</span></em></p>
    </td>
    <td style="width: 99.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="aN" style="font-size:12px;">`,aN,`</span></em></p>
    </td>
    <td style="width: 99.85pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="aP" style="font-size:12px;">`,aP,`</span></em></p>
    </td>
    <td style="width: 99.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="aS" style="font-size:12px;">`,aS,`</span></em></p>
    </td>
</tr>
<tr>
    <td colspan="4" style="width: 399.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;background: rgb(84, 141, 212);padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><strong><span style="font-size:12px;color:white;">Endorsed by<sup>1</sup></span></strong></p>
    </td>
</tr>
<tr>
    <td style="width: 99.85pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="eD" style="font-size:12px;">`,eD,`</span></em></p>
    </td>
    <td style="width: 99.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="eN" style="font-size:12px;">`,eN,`</span></em></p>
    </td>
    <td style="width: 99.85pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="eP" style="font-size:12px;">`,eP,`</span></em></p>
    </td>
    <td style="width: 99.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0in 5.4pt;vertical-align: top;">
        <p style='margin-top:6.0pt;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:14.0pt;font-size:13px;font-family:"Arial",sans-serif;text-align:center;'><em><span id="eS" style="font-size:12px;">`,eS,`</span></em></p>
    </td>
    </tr>
    </tbody>
    </table>
    <div style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Calibri",sans-serif;'>
    <p><br></p>
    </div>
    <div style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Calibri",sans-serif;'><br>
    <div style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Calibri",sans-serif;' id="ftn1">
    <p style='margin:0in;font-size:13px;font-family:"Arial",sans-serif;text-align:justify;'><a href="#_ftnref1" name="_ftn1" title=""><span style="vertical-align:super;"><span style="vertical-align:super;"><span style='font-size:13px;font-family:"Arial",sans-serif;'>[1]</span></span></span></a> Applicable only for Change with <strong>LOW</strong> Safety Significance. For changes with no safety impact or <strong>Medium</strong> or <strong>High</strong> safety significance, those rows shall be deleted.</p>
    </div>
</div>`, `</body></html>`
] , { type: `application/msword` });
        

        // Create a download link and trigger the download
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${fileName}.doc`;
        link.click();
        URL.revokeObjectURL(link.href);
    } catch (error) {
        console.error('Error generating Word file:', error);
    }
}