type Props = {
  title: string;
};
const doGenerateHTML = ({title = 'Props'}: Props) => {
  return `
    <!DOCTYPE html
        PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Invoice 069.xlsx</title>
        <meta name="author" content="HP" />
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                text-indent: 0;
            }
    
            .s1 {
                color: black;
                font-family: Cambria, serif;
                font-style: normal;
                font-weight: normal;
                text-decoration: none;
                font-size: 20pt;
            }
    
            .s2 {
                color: black;
                font-family: Cambria, serif;
                font-style: normal;
                font-weight: normal;
                text-decoration: none;
                font-size: 8pt;
            }
    
            .s3 {
                color: black;
                font-family: Cambria, serif;
                font-style: normal;
                font-weight: bold;
                text-decoration: none;
                font-size: 11.5pt;
            }
    
            .s4 {
                color: black;
                font-family: Cambria, serif;
                font-style: normal;
                font-weight: bold;
                text-decoration: none;
                font-size: 10pt;
            }
    
            .s5 {
                color: black;
                font-family: Cambria, serif;
                font-style: normal;
                font-weight: bold;
                text-decoration: none;
                font-size: 8.5pt;
            }
    
            .s6 {
                color: black;
                font-family: Cambria, serif;
                font-style: normal;
                font-weight: normal;
                text-decoration: underline;
                font-size: 8pt;
            }
    
            .s7 {
                color: black;
                font-family: Cambria, serif;
                font-style: normal;
                font-weight: normal;
                text-decoration: none;
                font-size: 8.5pt;
            }
    
            .s8 {
                color: black;
                font-family: "Times New Roman", serif;
                font-style: normal;
                font-weight: normal;
                text-decoration: none;
                font-size: 8pt;
            }
    
            .s9 {
                color: black;
                font-family: Cambria, serif;
                font-style: normal;
                font-weight: normal;
                text-decoration: none;
                font-size: 8.5pt;
            }
    
            .s10 {
                color: black;
                font-family: Cambria, serif;
                font-style: normal;
                font-weight: bold;
                text-decoration: none;
                font-size: 8pt;
            }
    
            li {
                display: block;
            }
    
            #l1 {
                padding-left: 0pt;
                counter-reset: c1 1;
            }
    
            #l1>li>*:first-child:before {
                counter-increment: c1;
                content: counter(c1, decimal)". ";
                color: black;
                font-family: Cambria, serif;
                font-style: normal;
                font-weight: bold;
                text-decoration: none;
                font-size: 8.5pt;
            }
    
            #l1>li:first-child>*:first-child:before {
                counter-increment: c1 0;
            }
    
            table,
            tbody {
                vertical-align: top;
                overflow: visible;
            }
        </style>
    </head>
    
    <body>
        <table style="border-collapse:collapse;margin-left:6.42999pt" cellspacing="0">
            <tr style="height:11pt">
                <td style="width:319pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt"
                    colspan="6" rowspan="2" bgcolor="#FBD4B3">
                    <p class="s1"
                        style="padding-left: 108pt;padding-right: 107pt;text-indent: 0pt;line-height: 19pt;text-align: center;">
                        ${title}</p>
                </td>
                <td style="width:114pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                    colspan="2" bgcolor="#FFFF00">
                    <p class="s2"
                        style="padding-left: 43pt;padding-right: 43pt;text-indent: 0pt;line-height: 8pt;text-align: center;">
                        Invoice</p>
                </td>
                <td style="width:84pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:2pt"
                    rowspan="2" bgcolor="#FFFF00">
                    <p class="s3" style="padding-top: 2pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">Original
                    </p>
                </td>
            </tr>
            <tr style="height:12pt">
                <td style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt"
                    colspan="2" bgcolor="#FFFF00">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
            </tr>
            <tr style="height:21pt">
                <td style="width:319pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:2pt"
                    colspan="6" bgcolor="#C4D8F0">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td style="width:198pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt"
                    colspan="2">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
            </tr>
            <tr style="height:13pt">
                <td
                    style="width:38pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt">
                    <p class="s2" style="padding-top: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Name</p>
                </td>
                <td style="width:236pt;border-top-style:solid;border-top-width:2pt" colspan="4">
                    <p class="s4" style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">TECH
                        WRAPPERS</p>
                </td>
                <td
                    style="width:45pt;border-top-style:solid;border-top-width:2pt;border-right-style:solid;border-right-width:2pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s2" style="padding-top: 2pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Invoice No.:
                    </p>
                </td>
                <td
                    style="width:141pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt">
                    <p class="s4" style="padding-left: 1pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                        TECH-22/23-069</p>
                </td>
            </tr>
            <tr style="height:12pt">
                <td style="width:38pt;border-left-style:solid;border-left-width:2pt">
                    <p class="s2" style="padding-top: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Address</p>
                </td>
                <td style="width:236pt" colspan="4">
                    <p class="s2"
                        style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">
                        Survey No. 236, B/h. Galaxy Petroleum, B/h. Giriraj Hotel,</p>
                </td>
                <td style="width:45pt;border-right-style:solid;border-right-width:2pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s2" style="text-indent: 0pt;line-height: 9pt;text-align: left;">Invoice Date :</p>
                </td>
                <td
                    style="width:141pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt">
                    <p class="s5" style="padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">10-06-22</p>
                </td>
            </tr>
            <tr style="height:12pt">
                <td style="width:38pt;border-left-style:solid;border-left-width:2pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td style="width:236pt" colspan="4">
                    <p class="s2"
                        style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">
                        Desalpar-Kanthi, Dist - Kutch, State : Gujarat - 370405</p>
                </td>
                <td style="width:45pt;border-right-style:solid;border-right-width:2pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s2" style="text-indent: 0pt;line-height: 9pt;text-align: left;">PO No. :</p>
                </td>
                <td
                    style="width:141pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt">
                    <p class="s5" style="padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">
                        MSPL/22-23/00090</p>
                </td>
            </tr>
            <tr style="height:11pt">
                <td style="width:38pt;border-left-style:solid;border-left-width:2pt">
                    <p class="s2" style="text-indent: 0pt;line-height: 9pt;text-align: left;">Contact.</p>
                </td>
                <td style="width:236pt" colspan="4">
                    <p class="s2" style="padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">9687963636
                    </p>
                </td>
                <td style="width:45pt;border-right-style:solid;border-right-width:2pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s2" style="text-indent: 0pt;line-height: 8pt;text-align: left;">LC :</p>
                </td>
                <td
                    style="width:141pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
            </tr>
            <tr style="height:11pt">
                <td style="width:38pt;border-left-style:solid;border-left-width:2pt">
                    <p class="s2" style="text-indent: 0pt;line-height: 9pt;text-align: left;">E-mail</p>
                </td>
                <td style="width:236pt" colspan="4">
                    <p style="padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;"><a
                            href="mailto:techwrappers@gmail.com" class="s6">techwrappers@gmail.com</a></p>
                </td>
                <td style="width:45pt;border-right-style:solid;border-right-width:2pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s2" style="text-indent: 0pt;line-height: 8pt;text-align: left;">Truck No. :</p>
                </td>
                <td
                    style="width:141pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt">
                    <p class="s2" style="padding-left: 1pt;text-indent: 0pt;line-height: 8pt;text-align: left;">GJ 14 0512
                    </p>
                </td>
            </tr>
            <tr style="height:10pt">
                <td style="width:38pt;border-left-style:solid;border-left-width:2pt">
                    <p class="s2" style="text-indent: 0pt;line-height: 8pt;text-align: left;">PAN</p>
                </td>
                <td style="width:236pt" colspan="4">
                    <p class="s2" style="padding-left: 1pt;text-indent: 0pt;line-height: 8pt;text-align: left;">AAMFT4020D
                    </p>
                </td>
                <td style="width:45pt;border-right-style:solid;border-right-width:2pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                    rowspan="2">
                    <p class="s2" style="text-indent: 0pt;line-height: 8pt;text-align: left;">LUT No. :</p>
                </td>
                <td style="width:141pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt"
                    rowspan="2">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
            </tr>
            <tr style="height:1pt">
                <td style="width:38pt;border-left-style:solid;border-left-width:2pt" rowspan="2">
                    <p class="s2" style="text-indent: 0pt;line-height: 9pt;text-align: left;">GSTIN</p>
                </td>
                <td style="width:236pt" colspan="4" rowspan="2">
                    <p class="s5" style="padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">
                        24AAMFT4020D1ZL</p>
                </td>
                <td style="width:45pt;border-right-style:solid;border-right-width:2pt" rowspan="2">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
            </tr>
            <tr style="height:11pt">
                <td style="width:198pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:2pt"
                    colspan="2" rowspan="3">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
            </tr>
            <tr style="height:11pt">
                <td
                    style="width:38pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:2pt">
                    <p class="s2" style="text-indent: 0pt;line-height: 9pt;text-align: left;">State</p>
                </td>
                <td style="width:102pt;border-bottom-style:solid;border-bottom-width:2pt">
                    <p class="s2" style="padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Gujarat</p>
                </td>
                <td style="width:85pt;border-bottom-style:solid;border-bottom-width:2pt" colspan="2">
                    <p class="s2" style="padding-left: 24pt;text-indent: 0pt;line-height: 9pt;text-align: left;">State Code
                    </p>
                </td>
                <td style="width:49pt;border-bottom-style:solid;border-bottom-width:2pt">
                    <p class="s2"
                        style="padding-left: 20pt;padding-right: 19pt;text-indent: 0pt;line-height: 9pt;text-align: center;">
                        24</p>
                </td>
                <td
                    style="width:45pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:2pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
            </tr>
            <tr style="height:21pt">
                <td style="width:319pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:2pt"
                    colspan="6" bgcolor="#C4D8F0">
                    <p class="s2"
                        style="padding-top: 4pt;padding-left: 108pt;padding-right: 108pt;text-indent: 0pt;text-align: center;">
                        Details of Receiver | Billed to</p>
                </td>
            </tr>
            <tr style="height:36pt">
                <td
                    style="width:38pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt">
                    <p class="s2" style="padding-top: 1pt;text-indent: 0pt;line-height: 119%;text-align: left;">Name Address
                    </p>
                </td>
                <td style="width:236pt;border-top-style:solid;border-top-width:2pt" colspan="4">
                    <p class="s4" style="padding-left: 2pt;text-indent: 0pt;line-height: 12pt;text-align: left;">Medivac
                        Surgical Pvt Ltd</p>
                    <p class="s7"
                        style="padding-left: 1pt;padding-right: 6pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                        Survey No.801, N.H.8-A, Village Chhadawada, Tal. Bhachau, Dist. Kutch, Gujarat, 370140</p>
                </td>
                <td style="width:45pt;border-top-style:solid;border-top-width:2pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:2pt"
                    rowspan="4">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td style="width:198pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:2pt"
                    colspan="2" rowspan="4">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
            </tr>
            <tr style="height:11pt">
                <td style="width:38pt;border-left-style:solid;border-left-width:2pt">
                    <p class="s2" style="text-indent: 0pt;line-height: 9pt;text-align: left;">Contact.</p>
                </td>
                <td style="width:236pt" colspan="4">
                    <p class="s2" style="padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">6354600935
                    </p>
                </td>
            </tr>
            <tr style="height:21pt">
                <td style="width:38pt;border-left-style:solid;border-left-width:2pt">
                    <p class="s2" style="padding-right: 13pt;text-indent: 0pt;line-height: 10pt;text-align: left;">PAN GSTIN
                    </p>
                </td>
                <td style="width:236pt" colspan="4">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <p class="s5" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                        24AALCA5165G1ZP</p>
                </td>
            </tr>
            <tr style="height:11pt">
                <td
                    style="width:38pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:2pt">
                    <p class="s2" style="text-indent: 0pt;line-height: 9pt;text-align: left;">State</p>
                </td>
                <td style="width:236pt;border-bottom-style:solid;border-bottom-width:2pt" colspan="4">
                    <p class="s2" style="padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Gujarat
                        State Code<span class="s8"> </span>24</p>
                </td>
            </tr>
            <tr style="height:22pt">
                <td style="width:38pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt"
                    bgcolor="#DAEDF2">
                    <p class="s2" style="padding-top: 5pt;padding-left: 7pt;text-indent: 0pt;text-align: left;">Sr.No.</p>
                </td>
                <td style="width:102pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt"
                    bgcolor="#DAEDF2">
                    <p class="s2" style="padding-top: 5pt;padding-left: 30pt;text-indent: 0pt;text-align: left;">Description
                    </p>
                </td>
                <td style="width:47pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt"
                    bgcolor="#DAEDF2">
                    <p class="s2"
                        style="padding-top: 5pt;padding-left: 3pt;padding-right: 3pt;text-indent: 0pt;text-align: center;">
                        HSN</p>
                </td>
                <td style="width:38pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt"
                    bgcolor="#DAEDF2">
                    <p class="s2"
                        style="padding-top: 5pt;padding-left: 9pt;padding-right: 9pt;text-indent: 0pt;text-align: center;">
                        Uom</p>
                </td>
                <td style="width:49pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt"
                    bgcolor="#DAEDF2">
                    <p class="s2"
                        style="padding-top: 5pt;padding-left: 8pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        Quantity</p>
                </td>
                <td style="width:45pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt"
                    bgcolor="#DAEDF2">
                    <p class="s2"
                        style="padding-top: 5pt;padding-left: 8pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        Rate</p>
                </td>
                <td style="width:57pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt"
                    bgcolor="#DAEDF2">
                    <p class="s2" style="padding-top: 5pt;padding-left: 14pt;text-indent: 0pt;text-align: left;">Amount</p>
                </td>
                <td style="width:141pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:2pt"
                    bgcolor="#DAEDF2">
                    <p class="s2" style="padding-top: 5pt;padding-left: 46pt;text-indent: 0pt;text-align: left;">Total
                        Amount</p>
                </td>
            </tr>
            <tr style="height:29pt">
                <td
                    style="width:38pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7" style="padding-top: 8pt;text-indent: 0pt;text-align: center;">1</p>
                </td>
                <td
                    style="width:102pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s2"
                        style="padding-top: 4pt;padding-left: 20pt;text-indent: -5pt;line-height: 107%;text-align: left;">5
                        Ply Corrugated Box (665 x 380 x 370)</p>
                </td>
                <td
                    style="width:47pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 4pt;padding-right: 3pt;text-indent: 0pt;text-align: center;">
                        48191010</p>
                </td>
                <td
                    style="width:38pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        No</p>
                </td>
                <td
                    style="width:49pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        1450.00</p>
                </td>
                <td
                    style="width:45pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 8pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        135.00</p>
                </td>
                <td
                    style="width:57pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7" style="padding-top: 8pt;padding-left: 14pt;text-indent: 0pt;text-align: left;">195750</p>
                </td>
                <td
                    style="width:141pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt">
                    <p class="s7" style="padding-top: 8pt;text-indent: 0pt;text-align: right;">195750.00</p>
                </td>
            </tr>
            <tr style="height:29pt">
                <td
                    style="width:38pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7" style="padding-top: 8pt;text-indent: 0pt;text-align: center;">2</p>
                </td>
                <td
                    style="width:102pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s2"
                        style="padding-top: 4pt;padding-left: 20pt;text-indent: -5pt;line-height: 107%;text-align: left;">5
                        Ply Corrugated Box (665 x 380 x 370)</p>
                </td>
                <td
                    style="width:47pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 4pt;padding-right: 3pt;text-indent: 0pt;text-align: center;">
                        48191010</p>
                </td>
                <td
                    style="width:38pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        No</p>
                </td>
                <td
                    style="width:49pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        750.00</p>
                </td>
                <td
                    style="width:45pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 8pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        135.00</p>
                </td>
                <td
                    style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7" style="padding-top: 8pt;padding-left: 14pt;text-indent: 0pt;text-align: left;">101250</p>
                </td>
                <td
                    style="width:141pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt">
                    <p class="s7" style="padding-top: 8pt;text-indent: 0pt;text-align: right;">101250.00</p>
                </td>
            </tr>
            <tr style="height:29pt">
                <td
                    style="width:38pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7" style="padding-top: 8pt;text-indent: 0pt;text-align: center;">3</p>
                </td>
                <td
                    style="width:102pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s2"
                        style="padding-top: 4pt;padding-left: 26pt;padding-right: 1pt;text-indent: -2pt;line-height: 107%;text-align: left;">
                        Medivac Stereo (37x37 = 2pc)</p>
                </td>
                <td
                    style="width:47pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 4pt;padding-right: 3pt;text-indent: 0pt;text-align: center;">
                        3701</p>
                </td>
                <td
                    style="width:38pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        Cm</p>
                </td>
                <td
                    style="width:49pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        2738.00</p>
                </td>
                <td
                    style="width:45pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 8pt;padding-right: 7pt;text-indent: 0pt;text-align: center;">
                        1.70</p>
                </td>
                <td
                    style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7" style="padding-top: 8pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">4654.6</p>
                </td>
                <td
                    style="width:141pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt">
                    <p class="s7" style="padding-top: 8pt;text-indent: 0pt;text-align: right;">4654.60</p>
                </td>
            </tr>
            <tr style="height:29pt">
                <td
                    style="width:38pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7" style="padding-top: 8pt;text-indent: 0pt;text-align: center;">4</p>
                </td>
                <td
                    style="width:102pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s2"
                        style="padding-top: 4pt;padding-left: 26pt;padding-right: 1pt;text-indent: -2pt;line-height: 107%;text-align: left;">
                        Medivac Stereo (70x36 = 2pc)</p>
                </td>
                <td
                    style="width:47pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 4pt;padding-right: 3pt;text-indent: 0pt;text-align: center;">
                        3701</p>
                </td>
                <td
                    style="width:38pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        Cm</p>
                </td>
                <td
                    style="width:49pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        5040.00</p>
                </td>
                <td
                    style="width:45pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 8pt;padding-right: 7pt;text-indent: 0pt;text-align: center;">
                        1.70</p>
                </td>
                <td
                    style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7" style="padding-top: 8pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">8568.0</p>
                </td>
                <td
                    style="width:141pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt">
                    <p class="s7" style="padding-top: 8pt;text-indent: 0pt;text-align: right;">8568.00</p>
                </td>
            </tr>
            <tr style="height:29pt">
                <td
                    style="width:38pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7" style="padding-top: 8pt;text-indent: 0pt;text-align: center;">5</p>
                </td>
                <td
                    style="width:102pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s2"
                        style="padding-top: 4pt;padding-left: 26pt;padding-right: 1pt;text-indent: -2pt;line-height: 107%;text-align: left;">
                        Medivac Stereo (61x36 = 2pc)</p>
                </td>
                <td
                    style="width:47pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 4pt;padding-right: 3pt;text-indent: 0pt;text-align: center;">
                        3701</p>
                </td>
                <td
                    style="width:38pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        Cm</p>
                </td>
                <td
                    style="width:49pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        4392.00</p>
                </td>
                <td
                    style="width:45pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 8pt;padding-right: 7pt;text-indent: 0pt;text-align: center;">
                        1.70</p>
                </td>
                <td
                    style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7" style="padding-top: 8pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">7466.4</p>
                </td>
                <td
                    style="width:141pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt">
                    <p class="s7" style="padding-top: 8pt;text-indent: 0pt;text-align: right;">7466.40</p>
                </td>
            </tr>
            <tr style="height:29pt">
                <td
                    style="width:38pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7" style="padding-top: 8pt;text-indent: 0pt;text-align: center;">6</p>
                </td>
                <td
                    style="width:102pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s2"
                        style="padding-top: 4pt;padding-left: 26pt;padding-right: 1pt;text-indent: -2pt;line-height: 107%;text-align: left;">
                        Medivac Stereo (25x33 = 1pc)</p>
                </td>
                <td
                    style="width:47pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 4pt;padding-right: 3pt;text-indent: 0pt;text-align: center;">
                        3701</p>
                </td>
                <td
                    style="width:38pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        Cm</p>
                </td>
                <td
                    style="width:49pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        825.00</p>
                </td>
                <td
                    style="width:45pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 8pt;padding-right: 7pt;text-indent: 0pt;text-align: center;">
                        1.70</p>
                </td>
                <td
                    style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7" style="padding-top: 8pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">1402.5</p>
                </td>
                <td
                    style="width:141pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt">
                    <p class="s7" style="padding-top: 8pt;text-indent: 0pt;text-align: right;">1402.50</p>
                </td>
            </tr>
            <tr style="height:29pt">
                <td
                    style="width:38pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7" style="padding-top: 8pt;text-indent: 0pt;text-align: center;">7</p>
                </td>
                <td
                    style="width:102pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s2"
                        style="padding-top: 4pt;padding-left: 26pt;padding-right: 1pt;text-indent: -2pt;line-height: 107%;text-align: left;">
                        Medivac Stereo (22x23 = 1pc)</p>
                </td>
                <td
                    style="width:47pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 4pt;padding-right: 3pt;text-indent: 0pt;text-align: center;">
                        3701</p>
                </td>
                <td
                    style="width:38pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        Cm</p>
                </td>
                <td
                    style="width:49pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        506.00</p>
                </td>
                <td
                    style="width:45pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7"
                        style="padding-top: 8pt;padding-left: 8pt;padding-right: 7pt;text-indent: 0pt;text-align: center;">
                        1.70</p>
                </td>
                <td
                    style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s7" style="padding-top: 8pt;padding-left: 18pt;text-indent: 0pt;text-align: left;">860.2</p>
                </td>
                <td
                    style="width:141pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:2pt">
                    <p class="s7" style="padding-top: 8pt;text-indent: 0pt;text-align: right;">860.20</p>
                </td>
            </tr>
            <tr style="height:17pt">
                <td style="width:274pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt"
                    colspan="5">
                    <p class="s4" style="padding-top: 1pt;padding-left: 57pt;text-indent: 0pt;text-align: left;">Total
                        Invoice Amount (in Words):</p>
                </td>
                <td style="width:102pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                    colspan="2">
                    <p class="s5" style="padding-top: 2pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">Total
                        Taxable Amount</p>
                </td>
                <td
                    style="width:141pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt">
                    <p class="s3" style="padding-left: 79pt;text-indent: 0pt;text-align: left;">319951.70</p>
                </td>
            </tr>
            <tr style="height:14pt">
                <td style="width:274pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:2pt"
                    colspan="5" rowspan="4">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <p class="s5" style="padding-left: 100pt;text-indent: -81pt;line-height: 110%;text-align: left;">Rupees
                        Three Lakh SeventySeven Thousand Five Hundred FourtyThree Only</p>
                </td>
                <td
                    style="width:45pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s4"
                        style="padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;line-height: 11pt;text-align: center;">
                        CGST</p>
                </td>
                <td
                    style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s4"
                        style="padding-left: 20pt;padding-right: 19pt;text-indent: 0pt;line-height: 11pt;text-align: center;">
                        9%</p>
                </td>
                <td
                    style="width:141pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt">
                    <p class="s3" style="padding-left: 86pt;text-indent: 0pt;line-height: 11pt;text-align: left;">28795.65
                    </p>
                </td>
            </tr>
            <tr style="height:13pt">
                <td
                    style="width:45pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s4"
                        style="padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;line-height: 10pt;text-align: center;">
                        SGST</p>
                </td>
                <td
                    style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s4"
                        style="padding-left: 20pt;padding-right: 19pt;text-indent: 0pt;line-height: 10pt;text-align: center;">
                        9%</p>
                </td>
                <td
                    style="width:141pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt">
                    <p class="s3" style="padding-left: 86pt;text-indent: 0pt;line-height: 10pt;text-align: left;">28795.65
                    </p>
                </td>
            </tr>
            <tr style="height:13pt">
                <td style="width:102pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                    colspan="2">
                    <p class="s5" style="padding-left: 30pt;text-indent: 0pt;text-align: left;">Round Off</p>
                </td>
                <td
                    style="width:141pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt">
                    <p class="s3" style="padding-right: 1pt;text-indent: 0pt;line-height: 10pt;text-align: right;">-0.01</p>
                </td>
            </tr>
            <tr style="height:13pt">
                <td style="width:102pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt"
                    colspan="2">
                    <p class="s5" style="padding-left: 7pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Total
                        Invoice Amount</p>
                </td>
                <td
                    style="width:141pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:2pt">
                    <p class="s3" style="padding-left: 79pt;text-indent: 0pt;line-height: 10pt;text-align: left;">377543.00
                    </p>
                </td>
            </tr>
            <tr style="height:19pt">
                <td style="width:274pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt;border-right-style:solid;border-right-width:2pt"
                    colspan="5">
                    <p class="s2" style="padding-top: 5pt;text-indent: 0pt;text-align: left;">Our Bank Details:</p>
                </td>
                <td style="width:243pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt;border-right-style:solid;border-right-width:2pt"
                    colspan="3">
                    <p class="s2" style="padding-top: 5pt;text-indent: 0pt;text-align: left;">Delivery Add :</p>
                </td>
            </tr>
            <tr style="height:14pt">
                <td style="width:274pt;border-left-style:solid;border-left-width:2pt;border-right-style:solid;border-right-width:2pt"
                    colspan="5">
                    <p class="s2" style="padding-top: 3pt;text-indent: 0pt;line-height: 9pt;text-align: left;">BANK NAME:
                        HDFC BANK LTD</p>
                </td>
                <td style="width:243pt;border-left-style:solid;border-left-width:2pt;border-right-style:solid;border-right-width:2pt"
                    colspan="3">
                    <p class="s5"
                        style="padding-top: 3pt;padding-left: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">
                        Medivac Surgical Pvt Ltd</p>
                </td>
            </tr>
            <tr style="height:12pt">
                <td style="width:274pt;border-left-style:solid;border-left-width:2pt;border-right-style:solid;border-right-width:2pt"
                    colspan="5">
                    <p class="s2" style="text-indent: 0pt;line-height: 9pt;text-align: left;">A/C NO: <span
                            class="s9">50200025282931</span></p>
                </td>
                <td style="width:243pt;border-left-style:solid;border-left-width:2pt;border-right-style:solid;border-right-width:2pt"
                    colspan="3">
                    <p class="s7" style="text-indent: 0pt;line-height: 9pt;text-align: left;">Survey No.801, N.H.8-A,
                        Village Chhadawada, Tal. Bhachau,</p>
                </td>
            </tr>
            <tr style="height:12pt">
                <td style="width:274pt;border-left-style:solid;border-left-width:2pt;border-right-style:solid;border-right-width:2pt"
                    colspan="5">
                    <p class="s2" style="padding-top: 1pt;text-indent: 0pt;line-height: 9pt;text-align: left;">BRANCH:
                        MUNDRA</p>
                </td>
                <td style="width:243pt;border-left-style:solid;border-left-width:2pt;border-right-style:solid;border-right-width:2pt"
                    colspan="3">
                    <p class="s7" style="text-indent: 0pt;line-height: 9pt;text-align: left;">Dist. Kutch, Gujarat, 370140
                    </p>
                </td>
            </tr>
            <tr style="height:11pt">
                <td style="width:274pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:2pt"
                    colspan="5">
                    <p class="s2" style="text-indent: 0pt;line-height: 9pt;text-align: left;">IFSC CODE: HDFC0000577</p>
                </td>
                <td style="width:243pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:2pt"
                    colspan="3">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
            </tr>
            <tr style="height:74pt">
                <td style="width:274pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:2pt"
                    colspan="5">
                    <p class="s5" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Terms &amp;
                        Condition :</p>
                    <ol id="l1">
                        <li data-list-text="1.">
                            <p class="s7" style="padding-left: 10pt;text-indent: -9pt;text-align: left;">Payment Due Date:
                                Advance</p>
                            <p style="text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                        <li data-list-text="2.">
                            <p class="s7" style="padding-left: 10pt;text-indent: -9pt;line-height: 10pt;text-align: left;">
                                Our Responsibility ceases as soon as the goods leaves our premises</p>
                        </li>
                        <li data-list-text="3.">
                            <p class="s7" style="padding-left: 10pt;text-indent: -9pt;line-height: 10pt;text-align: left;">
                                Goods once supplied will not be taken back or exchange</p>
                        </li>
                        <li data-list-text="4.">
                            <p class="s7" style="padding-left: 10pt;text-indent: -9pt;line-height: 10pt;text-align: left;">
                                Subject to Mundra Jurisdiction</p>
                        </li>
                    </ol>
                </td>
                <td style="width:243pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:2pt"
                    colspan="3">
                    <p class="s10" style="text-indent: 0pt;text-align: left;">For, TECH WRAPPERS</p>
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <p class="s2" style="text-indent: 0pt;line-height: 9pt;text-align: left;">Signature</p>
                </td>
            </tr>
        </table>
    </body>
    
    </html>
    `;
};
export default doGenerateHTML;
