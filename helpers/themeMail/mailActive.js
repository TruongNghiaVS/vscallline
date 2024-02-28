
module.exports = function (name, username, link) {
    return `<!DOCTYPE html
                PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <!--[if IE]><html xmlns="http://www.w3.org/1999/xhtml" class="ie"><![endif]-->
            <!--[if !IE]><!-->
            <html style="margin: 0;padding: 0;" xmlns="http://www.w3.org/1999/xhtml">
            <!--<![endif]-->
            
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <title></title>
                <!--[if !mso]><!-->
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <!--<![endif]-->
                <meta name="viewport" content="width=device-width" />
                <style type="text/css">
                @media only screen and (min-width: 620px) {
                    .wrapper {
                    min-width: 600px !important
                    }
            
                    .wrapper h1 {}
            
                    .wrapper h1 {
                    font-size: 26px !important;
                    line-height: 34px !important
                    }
            
                    .wrapper h2 {}
            
                    .wrapper h2 {
                    font-size: 20px !important;
                    line-height: 28px !important
                    }
            
                    .wrapper h3 {}
            
                    .column {}
            
                    .wrapper .size-8 {
                    font-size: 8px !important;
                    line-height: 14px !important
                    }
            
                    .wrapper .size-9 {
                    font-size: 9px !important;
                    line-height: 16px !important
                    }
            
                    .wrapper .size-10 {
                    font-size: 10px !important;
                    line-height: 18px !important
                    }
            
                    .wrapper .size-11 {
                    font-size: 11px !important;
                    line-height: 19px !important
                    }
            
                    .wrapper .size-12 {
                    font-size: 12px !important;
                    line-height: 19px !important
                    }
            
                    .wrapper .size-13 {
                    font-size: 13px !important;
                    line-height: 21px !important
                    }
            
                    .wrapper .size-14 {
                    font-size: 14px !important;
                    line-height: 21px !important
                    }
            
                    .wrapper .size-15 {
                    font-size: 15px !important;
                    line-height: 23px !important
                    }
            
                    .wrapper .size-16 {
                    font-size: 16px !important;
                    line-height: 24px !important
                    }
            
                    .wrapper .size-17 {
                    font-size: 17px !important;
                    line-height: 26px !important
                    }
            
                    .wrapper .size-18 {
                    font-size: 18px !important;
                    line-height: 26px !important
                    }
            
                    .wrapper .size-20 {
                    font-size: 20px !important;
                    line-height: 28px !important
                    }
            
                    .wrapper .size-22 {
                    font-size: 22px !important;
                    line-height: 31px !important
                    }
            
                    .wrapper .size-24 {
                    font-size: 24px !important;
                    line-height: 32px !important
                    }
            
                    .wrapper .size-26 {
                    font-size: 26px !important;
                    line-height: 34px !important
                    }
            
                    .wrapper .size-28 {
                    font-size: 28px !important;
                    line-height: 36px !important
                    }
            
                    .wrapper .size-30 {
                    font-size: 30px !important;
                    line-height: 38px !important
                    }
            
                    .wrapper .size-32 {
                    font-size: 32px !important;
                    line-height: 40px !important
                    }
            
                    .wrapper .size-34 {
                    font-size: 34px !important;
                    line-height: 43px !important
                    }
            
                    .wrapper .size-36 {
                    font-size: 36px !important;
                    line-height: 43px !important
                    }
            
                    .wrapper .size-40 {
                    font-size: 40px !important;
                    line-height: 47px !important
                    }
            
                    .wrapper .size-44 {
                    font-size: 44px !important;
                    line-height: 50px !important
                    }
            
                    .wrapper .size-48 {
                    font-size: 48px !important;
                    line-height: 54px !important
                    }
            
                    .wrapper .size-56 {
                    font-size: 56px !important;
                    line-height: 60px !important
                    }
            
                    .wrapper .size-64 {
                    font-size: 64px !important;
                    line-height: 63px !important
                    }
                }
                </style>
                <meta name="x-apple-disable-message-reformatting" />
                <style type="text/css">
                body {
                    margin: 0;
                    padding: 0;
                }
            
                table {
                    border-collapse: collapse;
                    table-layout: fixed;
                }
            
                * {
                    line-height: inherit;
                }
            
                [x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: none !important;
                }
            
                .wrapper .footer__share-button a:hover,
                .wrapper .footer__share-button a:focus {
                    color: #ffffff !important;
                }
            
                .btn a:hover,
                .btn a:focus,
                .footer__share-button a:hover,
                .footer__share-button a:focus,
                .email-footer__links a:hover,
                .email-footer__links a:focus {
                    opacity: 0.8;
                }
            
                .preheader,
                .header,
                .layout,
                .column {
                    transition: width 0.25s ease-in-out, max-width 0.25s ease-in-out;
                }
            
                .preheader td {
                    padding-bottom: 8px;
                }
            
                .layout,
                div.header {
                    max-width: 400px !important;
                    -fallback-width: 95% !important;
                    width: calc(100% - 20px) !important;
                }
            
                div.preheader {
                    max-width: 360px !important;
                    -fallback-width: 90% !important;
                    width: calc(100% - 60px) !important;
                }
            
                .snippet,
                .webversion {
                    Float: none !important;
                }
            
                .stack .column {
                    max-width: 400px !important;
                    width: 100% !important;
                }
            
                .fixed-width.has-border {
                    max-width: 402px !important;
                }
            
                .fixed-width.has-border .layout__inner {
                    box-sizing: border-box;
                }
            
                .snippet,
                .webversion {
                    width: 50% !important;
                }
            
                .ie .btn {
                    width: 100%;
                }
            
                .ie .stack .column,
                .ie .stack .gutter {
                    display: table-cell;
                    float: none !important;
                }
            
                .ie div.preheader,
                .ie .email-footer {
                    max-width: 560px !important;
                    width: 560px !important;
                }
            
                .ie .snippet,
                .ie .webversion {
                    width: 280px !important;
                }
            
                .ie div.header,
                .ie .layout {
                    max-width: 600px !important;
                    width: 600px !important;
                }
            
                .ie .two-col .column {
                    max-width: 300px !important;
                    width: 300px !important;
                }
            
                .ie .three-col .column,
                .ie .narrow {
                    max-width: 200px !important;
                    width: 200px !important;
                }
            
                .ie .wide {
                    width: 400px !important;
                }
            
                .ie .stack.fixed-width.has-border,
                .ie .stack.has-gutter.has-border {
                    max-width: 602px !important;
                    width: 602px !important;
                }
            
                .ie .stack.two-col.has-gutter .column {
                    max-width: 290px !important;
                    width: 290px !important;
                }
            
                .ie .stack.three-col.has-gutter .column,
                .ie .stack.has-gutter .narrow {
                    max-width: 188px !important;
                    width: 188px !important;
                }
            
                .ie .stack.has-gutter .wide {
                    max-width: 394px !important;
                    width: 394px !important;
                }
            
                .ie .stack.two-col.has-gutter.has-border .column {
                    max-width: 292px !important;
                    width: 292px !important;
                }
            
                .ie .stack.three-col.has-gutter.has-border .column,
                .ie .stack.has-gutter.has-border .narrow {
                    max-width: 190px !important;
                    width: 190px !important;
                }
            
                .ie .stack.has-gutter.has-border .wide {
                    max-width: 396px !important;
                    width: 396px !important;
                }
            
                .ie .fixed-width .layout__inner {
                    border-left: 0 none white !important;
                    border-right: 0 none white !important;
                }
            
                .ie .layout__edges {
                    display: none;
                }
            
                .mso .layout__edges {
                    font-size: 0;
                }
            
                .layout-fixed-width,
                .mso .layout-full-width {
                    background-color: #ffffff;
                }
            
                @media only screen and (min-width: 620px) {
            
                    .column,
                    .gutter {
                    display: table-cell;
                    Float: none !important;
                    vertical-align: top;
                    }
            
                    div.preheader,
                    .email-footer {
                    max-width: 560px !important;
                    width: 560px !important;
                    }
            
                    .snippet,
                    .webversion {
                    width: 280px !important;
                    }
            
                    div.header,
                    .layout,
                    .one-col .column {
                    max-width: 600px !important;
                    width: 600px !important;
                    }
            
                    .fixed-width.has-border,
                    .fixed-width.x_has-border,
                    .has-gutter.has-border,
                    .has-gutter.x_has-border {
                    max-width: 602px !important;
                    width: 602px !important;
                    }
            
                    .two-col .column {
                    max-width: 300px !important;
                    width: 300px !important;
                    }
            
                    .three-col .column,
                    .column.narrow,
                    .column.x_narrow {
                    max-width: 200px !important;
                    width: 200px !important;
                    }
            
                    .column.wide,
                    .column.x_wide {
                    width: 400px !important;
                    }
            
                    .two-col.has-gutter .column,
                    .two-col.x_has-gutter .column {
                    max-width: 290px !important;
                    width: 290px !important;
                    }
            
                    .three-col.has-gutter .column,
                    .three-col.x_has-gutter .column,
                    .has-gutter .narrow {
                    max-width: 188px !important;
                    width: 188px !important;
                    }
            
                    .has-gutter .wide {
                    max-width: 394px !important;
                    width: 394px !important;
                    }
            
                    .two-col.has-gutter.has-border .column,
                    .two-col.x_has-gutter.x_has-border .column {
                    max-width: 292px !important;
                    width: 292px !important;
                    }
            
                    .three-col.has-gutter.has-border .column,
                    .three-col.x_has-gutter.x_has-border .column,
                    .has-gutter.has-border .narrow,
                    .has-gutter.x_has-border .narrow {
                    max-width: 190px !important;
                    width: 190px !important;
                    }
            
                    .has-gutter.has-border .wide,
                    .has-gutter.x_has-border .wide {
                    max-width: 396px !important;
                    width: 396px !important;
                    }
                }
            
                @supports (display: flex) {
                    @media only screen and (min-width: 620px) {
                    .fixed-width.has-border .layout__inner {
                        display: flex !important;
                    }
                    }
                }
            
                @media only screen and (-webkit-min-device-pixel-ratio: 2),
                only screen and (min--moz-device-pixel-ratio: 2),
                only screen and (-o-min-device-pixel-ratio: 2/1),
                only screen and (min-device-pixel-ratio: 2),
                only screen and (min-resolution: 192dpi),
                only screen and (min-resolution: 2dppx) {
                    .fblike {
                    background-image: url(https://i7.createsend1.com/static/eb/master/13-the-blueprint-3/images/fblike@2x.png) !important;
                    }
            
                    .tweet {
                    background-image: url(https://i8.createsend1.com/static/eb/master/13-the-blueprint-3/images/tweet@2x.png) !important;
                    }
            
                    .linkedinshare {
                    background-image: url(https://i9.createsend1.com/static/eb/master/13-the-blueprint-3/images/lishare@2x.png) !important;
                    }
            
                    .forwardtoafriend {
                    background-image: url(https://i10.createsend1.com/static/eb/master/13-the-blueprint-3/images/forward@2x.png) !important;
                    }
                }
            
                @media (max-width: 321px) {
                    .fixed-width.has-border .layout__inner {
                    border-width: 1px 0 !important;
                    }
            
                    .layout,
                    .stack .column {
                    min-width: 320px !important;
                    width: 320px !important;
                    }
            
                    .border {
                    display: none;
                    }
            
                    .has-gutter .border {
                    display: table-cell;
                    }
                }
            
                .mso div {
                    border: 0 none white !important;
                }
            
                .mso .w560 .divider {
                    Margin-left: 260px !important;
                    Margin-right: 260px !important;
                }
            
                .mso .w360 .divider {
                    Margin-left: 160px !important;
                    Margin-right: 160px !important;
                }
            
                .mso .w260 .divider {
                    Margin-left: 110px !important;
                    Margin-right: 110px !important;
                }
            
                .mso .w160 .divider {
                    Margin-left: 60px !important;
                    Margin-right: 60px !important;
                }
            
                .mso .w354 .divider {
                    Margin-left: 157px !important;
                    Margin-right: 157px !important;
                }
            
                .mso .w250 .divider {
                    Margin-left: 105px !important;
                    Margin-right: 105px !important;
                }
            
                .mso .w148 .divider {
                    Margin-left: 54px !important;
                    Margin-right: 54px !important;
                }
            
                .mso .size-8,
                .ie .size-8 {
                    font-size: 8px !important;
                    line-height: 14px !important;
                }
            
                .mso .size-9,
                .ie .size-9 {
                    font-size: 9px !important;
                    line-height: 16px !important;
                }
            
                .mso .size-10,
                .ie .size-10 {
                    font-size: 10px !important;
                    line-height: 18px !important;
                }
            
                .mso .size-11,
                .ie .size-11 {
                    font-size: 11px !important;
                    line-height: 19px !important;
                }
            
                .mso .size-12,
                .ie .size-12 {
                    font-size: 12px !important;
                    line-height: 19px !important;
                }
            
                .mso .size-13,
                .ie .size-13 {
                    font-size: 13px !important;
                    line-height: 21px !important;
                }
            
                .mso .size-14,
                .ie .size-14 {
                    font-size: 14px !important;
                    line-height: 21px !important;
                }
            
                .mso .size-15,
                .ie .size-15 {
                    font-size: 15px !important;
                    line-height: 23px !important;
                }
            
                .mso .size-16,
                .ie .size-16 {
                    font-size: 16px !important;
                    line-height: 24px !important;
                }
            
                .mso .size-17,
                .ie .size-17 {
                    font-size: 17px !important;
                    line-height: 26px !important;
                }
            
                .mso .size-18,
                .ie .size-18 {
                    font-size: 18px !important;
                    line-height: 26px !important;
                }
            
                .mso .size-20,
                .ie .size-20 {
                    font-size: 20px !important;
                    line-height: 28px !important;
                }
            
                .mso .size-22,
                .ie .size-22 {
                    font-size: 22px !important;
                    line-height: 31px !important;
                }
            
                .mso .size-24,
                .ie .size-24 {
                    font-size: 24px !important;
                    line-height: 32px !important;
                }
            
                .mso .size-26,
                .ie .size-26 {
                    font-size: 26px !important;
                    line-height: 34px !important;
                }
            
                .mso .size-28,
                .ie .size-28 {
                    font-size: 28px !important;
                    line-height: 36px !important;
                }
            
                .mso .size-30,
                .ie .size-30 {
                    font-size: 30px !important;
                    line-height: 38px !important;
                }
            
                .mso .size-32,
                .ie .size-32 {
                    font-size: 32px !important;
                    line-height: 40px !important;
                }
            
                .mso .size-34,
                .ie .size-34 {
                    font-size: 34px !important;
                    line-height: 43px !important;
                }
            
                .mso .size-36,
                .ie .size-36 {
                    font-size: 36px !important;
                    line-height: 43px !important;
                }
            
                .mso .size-40,
                .ie .size-40 {
                    font-size: 40px !important;
                    line-height: 47px !important;
                }
            
                .mso .size-44,
                .ie .size-44 {
                    font-size: 44px !important;
                    line-height: 50px !important;
                }
            
                .mso .size-48,
                .ie .size-48 {
                    font-size: 48px !important;
                    line-height: 54px !important;
                }
            
                .mso .size-56,
                .ie .size-56 {
                    font-size: 56px !important;
                    line-height: 60px !important;
                }
            
                .mso .size-64,
                .ie .size-64 {
                    font-size: 64px !important;
                    line-height: 63px !important;
                }
                </style>
            
                <style type="text/css">
                body {
                    background-color: #fbfbfb
                }
            
                .logo a:hover,
                .logo a:focus {
                    color: #1e2e3b !important
                }
            
                .mso .layout-has-border {
                    border-top: 1px solid #c8c8c8;
                    border-bottom: 1px solid #c8c8c8
                }
            
                .mso .layout-has-bottom-border {
                    border-bottom: 1px solid #c8c8c8
                }
            
                .mso .border,
                .ie .border {
                    background-color: #c8c8c8
                }
            
                .mso h1,
                .ie h1 {}
            
                .mso h1,
                .ie h1 {
                    font-size: 26px !important;
                    line-height: 34px !important
                }
            
                .mso h2,
                .ie h2 {}
            
                .mso h2,
                .ie h2 {
                    font-size: 20px !important;
                    line-height: 28px !important
                }
            
                .mso h3,
                .ie h3 {}
            
                .mso .layout__inner,
                .ie .layout__inner {}
            
                .mso .footer__share-button p {}
            
                .mso .footer__share-button p {
                    font-family: Georgia, serif
                }
                </style>
                <meta name="robots" content="noindex,nofollow" />
                <meta property="og:title" content="rapidcode" />
            </head>
            
            <body class="full-padding" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;">
            
                <table class="wrapper"
                style="border-collapse: collapse;table-layout: fixed;min-width: 320px;width: 100%;background-color: #fbfbfb;"
                cellpadding="0" cellspacing="0" role="presentation">
                <tbody>
                    <tr>
                    <td>
                        <div role="banner">
                        <div class="preheader"
                            style="Margin: 0 auto;max-width: 560px;min-width: 280px; width: 280px;width: calc(28000% - 167440px);">
                            <div style="border-collapse: collapse;display: table;width: 100%;">
                            </div>
                        </div>
                        <div class="header"
                            style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);"
                            id="emb-email-header-container">
                            <!--[if (mso)|(IE)]><table align="center" class="header" cellpadding="0" cellspacing="0" role="presentation"><tr><td style="width: 600px"><![endif]-->
                            <div class="logo emb-logo-margin-box"
                            style="font-size: 26px;line-height: 32px;Margin-top: 6px;Margin-bottom: 20px;color: #41637e;font-family: Avenir,sans-serif;Margin-left: 20px;Margin-right: 20px;"
                            align="center">
                            <div class="logo-center" align="center" id="emb-email-header"><img
                                style="display: block;height: auto;width: 100%;border: 0;max-width: 141px;" src="%logo%" alt=""
                                width="141" /></div>
                            </div>
                            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                        </div>
                        </div>
                        <div>
                        <div class="layout one-col fixed-width stack"
                            style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                            <div class="layout__inner"
                            style="border-collapse: collapse;display: table;width: 100%;background-color: #ffffff;">
                            <!--[if (mso)|(IE)]><table align="center" cellpadding="0" cellspacing="0" role="presentation"><tr class="layout-fixed-width" style="background-color: #ffffff;"><td style="width: 600px" class="w560"><![endif]-->
                            <div class="column"
                                style="text-align: left;color: #565656;font-size: 14px;line-height: 21px;font-family: Georgia,serif;">
            
                                <div style="Margin-left: 20px;Margin-right: 20px;Margin-top: 24px;">
                                <div style="mso-line-height-rule: exactly;mso-text-raise: 11px;vertical-align: middle;">
                                    <h1
                                    style="Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #565656;font-size: 22px;line-height: 31px;font-family: Avenir,sans-serif;">
                                    Ch&#224;o m&#7915;ng ${name} &#273;&#7871;n v&#7899;i TIKITECH</h1>
                                    <p style="Margin-top: 20px;Margin-bottom: 20px;font-family: arial,sans-serif;"><span
                                        class="font-arial">Cám ơn ${username} đã tham gia. Để thay đổi mật khẩu vui lòng dùng link bên dưới.</span></p>
                                </div>
                                </div>
            
                                <div style="Margin-left: 20px;Margin-right: 20px;Margin-bottom: 24px;">
                                <div class="btn btn--flat btn--large" style="text-align:center;">
                                    <![if !mso]><a
                                    style="border-radius: 4px;display: inline-block;font-size: 14px;font-weight: bold;line-height: 24px;padding: 12px 24px;text-align: center;text-decoration: none !important;transition: opacity 0.1s ease-in;color: #ffffff !important;background-color: #59cf47;font-family: Arial, sans-serif;"
                                    href="${link}">Đổi mật khẩu</a>
                                    <![endif]>
                                    <!--[if mso]><p style="line-height:0;margin:0;">&nbsp;</p><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="http://#" style="width:113px" arcsize="9%" fillcolor="#59CF47" stroke="f"><v:textbox style="mso-fit-shape-to-text:t" inset="0px,11px,0px,11px"><center style="font-size:14px;line-height:24px;color:#FFFFFF;font-family:Arial,sans-serif;font-weight:bold;mso-line-height-rule:exactly;mso-text-raise:4px">K&#237;ch Ho&#7841;t</center></v:textbox></v:roundrect><![endif]-->
                                </div>
                                </div>
            
                            </div>
                            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                            </div>
                        </div>
            
                        <div style="mso-line-height-rule: exactly;line-height: 20px;font-size: 20px;">&nbsp;</div>
            
            
                        <div role="contentinfo">
                            <div class="layout email-footer stack"
                            style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                            <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;">
                                <!--[if (mso)|(IE)]><table align="center" cellpadding="0" cellspacing="0" role="presentation"><tr class="layout-email-footer"><td style="width: 400px;" valign="top" class="w360"><![endif]-->
                                <div class="column wide"
                                style="text-align: left;font-size: 12px;line-height: 19px;color: #999;font-family: Georgia,serif;Float: left;max-width: 400px;min-width: 320px; width: 320px;width: calc(8000% - 47600px);">
                                <div style="Margin-left: 20px;Margin-right: 20px;Margin-top: 10px;Margin-bottom: 10px;">
            
                                    <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                    style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Arial;">
                                    <tbody>
                                        <tr>
                                        <td>
                                            <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                            style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Arial;">
                                            <tbody>
                                                <tr>
                                                <td style="vertical-align: middle;">
                                                    <h3 color="#000000" class="sc-fBuWsC eeihxG"
                                                    style="margin: 0px; font-size: 20px; color: rgb(0, 0, 0);">
                                                    <span>TIKITECH</span><span>&nbsp;</h3>
                                                    <p color="#000000" font-size="large" class="sc-fMiknA bxZCMx"
                                                    style="margin: 0px; color: rgb(0, 0, 0); font-size: 16px; line-height: 24px;">
                                                    <span>Support team</span></p>
                                                </td>
                                                <td width="30">
                                                    <div style="width: 30px;"></div>
                                                </td>
                                                <td color="#54f2bd" direction="vertical" width="1" class="sc-jhAzac hmXDXQ"
                                                    style="width: 1px; border-bottom: none; border-left: 1px solid rgb(84, 242, 189);">
                                                </td>
                                                <td width="30">
                                                    <div style="width: 30px;"></div>
                                                </td>
                                                <td style="vertical-align: middle;">
                                                    <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                                    style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Arial;">
                                                    <tbody>
                                                        <tr height="25" style="vertical-align: middle;">
                                                        <td width="30" style="vertical-align: middle;">
                                                            <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                                            style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Arial;">
                                                            <tbody>
                                                                <tr>
                                                                <td style="vertical-align: bottom;"><span color="#54f2bd" width="11"
                                                                    class="sc-jlyJG bbyJzT"
                                                                    style="display: block; background-color: rgb(84, 242, 189);"><img
                                                                        src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                                                        color="#54f2bd" width="13" class="sc-iRbamj blSEcj"
                                                                        style="display: block; background-color: rgb(84, 242, 189);"></span>
                                                                </td>
                                                                </tr>
                                                            </tbody>
                                                            </table>
                                                        </td>
                                                        <td style="padding: 0px;"><a href="mailto:futureteateam@gmail.com"
                                                            color="#000000" class="sc-gipzik iyhjGb"
                                                            style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>futureteateam@gmail.com</span></a>
                                                        </td>
                                                        </tr>
                                                        <tr height="25" style="vertical-align: middle;">
                                                        <td width="30" style="vertical-align: middle;">
                                                            <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                                            style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Arial;">
                                                            <tbody>
                                                                <tr>
                                                                <td style="vertical-align: bottom;"><span color="#54f2bd" width="11"
                                                                    class="sc-jlyJG bbyJzT"
                                                                    style="display: block; background-color: rgb(84, 242, 189);"><img
                                                                        src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
                                                                        color="#54f2bd" width="13" class="sc-iRbamj blSEcj"
                                                                        style="display: block; background-color: rgb(84, 242, 189);"></span>
                                                                </td>
                                                                </tr>
                                                            </tbody>
                                                            </table>
                                                        </td>
                                                        <td style="padding: 0px;"><a href="//rapidcode.org" color="#000000"
                                                            class="sc-gipzik iyhjGb"
                                                            style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>rapidcode.org</span></a>
                                                        </td>
                                                        </tr>
                                                    </tbody>
                                                    </table>
                                                </td>
                                                </tr>
                                            </tbody>
                                            </table>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                            style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Arial; width: 100%;">
                                            <tbody>
                                                <tr>
                                                <td height="30"></td>
                                                </tr>
                                                <tr>
                                                <td color="#54f2bd" direction="horizontal" height="1" class="sc-jhAzac hmXDXQ"
                                                    style="width: 100%; border-bottom: 1px solid rgb(84, 242, 189); border-left: none; display: block;">
                                                </td>
                                                </tr>
                                                <tr>
                                                <td height="30"></td>
                                                </tr>
                                            </tbody>
                                            </table>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                            style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Arial; width: 100%;">
                                            <tbody>
                                                <tr>
                                                <td style="vertical-align: top;"></td>
                                                <td style="text-align: right; vertical-align: top;">
                                                    <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW"
                                                    style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Arial; display: inline-block;">
                                                    <tbody>
                                                        <tr style="text-align: right;">
                                                        <td><a href="https://www.facebook.com/9586team" color="#6A78D1"
                                                            class="sc-hzDkRC kpsoyz"
                                                            style="display: inline-block; padding: 0px; background-color: rgb(106, 120, 209);"><img
                                                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                                                alt="facebook" color="#6A78D1" height="24" class="sc-bRBYWo ccSRck"
                                                                style="background-color: rgb(106, 120, 209); max-width: 135px; display: block;"></a>
                                                        </td>
                                                        <td width="5">
                                                            <div></div>
                                                        </td>
                                                        </tr>
                                                    </tbody>
                                                    </table>
                                                </td>
                                                </tr>
                                            </tbody>
                                            </table>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td height="30"></td>
                                        </tr>
                                    </tbody>
                                    </table>
            
                                </div>
                                <!--[if mso]>&nbsp;<![endif]-->
                                </div>
                            </div>
                            <!--[if (mso)|(IE)]></td><td style="width: 200px;" valign="top" class="w160"><![endif]-->
                            <div class="column narrow"
                                style="text-align: left;font-size: 12px;line-height: 19px;color: #999;font-family: Georgia,serif;Float: left;max-width: 320px;min-width: 200px; width: 320px;width: calc(72200px - 12000%);">
                                <div style="Margin-left: 20px;Margin-right: 20px;Margin-top: 10px;Margin-bottom: 10px;">
            
                                </div>
                            </div>
                            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                            </div>
                        </div>
                        <div class="layout one-col email-footer"
                            style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                            <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;">
                            <!--[if (mso)|(IE)]><table align="center" cellpadding="0" cellspacing="0" role="presentation"><tr class="layout-email-footer"><td style="width: 600px;" class="w560"><![endif]-->
                            <div class="column"
                                style="text-align: left;font-size: 12px;line-height: 19px;color: #999;font-family: Georgia,serif;">
                                <div style="Margin-left: 20px;Margin-right: 20px;Margin-top: 10px;Margin-bottom: 10px;">
                                </div>
                            </div>
                            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                            </div>
                        </div>
                        </div>
                        <div style="line-height:40px;font-size:40px;">&nbsp;</div>
                        </div>
                    </td>
                    </tr>
                </tbody>
                </table>
            
            </body>
            
            </html>`
}
