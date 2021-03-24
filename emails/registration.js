const keys = require('../keys')



module.exports = function (user_email) {
	return {
		from: `"Магазин" ${keys.MY_EMAIL}`,
		to: user_email,
		subject: "Успех",
		text: "Добро пожаловать в наш магазин",

		html: `<head>
		<title>Милая</title>
		<!--[if !mso]><!-- -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<!--<![endif]-->
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<style type="text/css">
		  #outlook a {
			 padding: 0;
		  }
	 
		  body {
			 margin: 0;
			 padding: 0;
			 -webkit-text-size-adjust: 100%;
			 -ms-text-size-adjust: 100%;
		  }
	 
		  table,
		  td {
			 border-collapse: collapse;
			 mso-table-lspace: 0pt;
			 mso-table-rspace: 0pt;
		  }
	 
		  img {
			 border: 0;
			 height: auto;
			 line-height: 100%;
			 outline: none;
			 text-decoration: none;
			 -ms-interpolation-mode: bicubic;
		  }
	 
		  p {
			 display: block;
			 margin: 13px 0;
		  }
		</style>
		<!--[if mso]>
				<xml>
				<o:OfficeDocumentSettings>
				  <o:AllowPNG/>
				  <o:PixelsPerInch>96</o:PixelsPerInch>
				</o:OfficeDocumentSettings>
				</xml>
				<![endif]-->
		<!--[if lte mso 11]>
				<style type="text/css">
				  .mj-outlook-group-fix { width:100% !important; }
				</style>
				<![endif]-->
		<style type="text/css">
		  @media only screen and (min-width:480px) {
			 .mj-column-per-67 {
				width: 67% !important;
				max-width: 67%;
			 }
	 
			 .mj-column-per-33 {
				width: 33% !important;
				max-width: 33%;
			 }
	 
			 .mj-column-per-100 {
				width: 100% !important;
				max-width: 100%;
			 }
	 
			 .mj-column-per-50 {
				width: 50% !important;
				max-width: 50%;
			 }
		  }
		</style>
		<style type="text/css">
		  [owa] .mj-column-per-67 {
			 width: 67% !important;
			 max-width: 67%;
		  }
	 
		  [owa] .mj-column-per-33 {
			 width: 33% !important;
			 max-width: 33%;
		  }
	 
		  [owa] .mj-column-per-100 {
			 width: 100% !important;
			 max-width: 100%;
		  }
	 
		  [owa] .mj-column-per-50 {
			 width: 50% !important;
			 max-width: 50%;
		  }
		</style>
		<style type="text/css">
		  @media only screen and (max-width:480px) {
			 table.mj-full-width-mobile {
				width: 100% !important;
			 }
	 
			 td.mj-full-width-mobile {
				width: auto !important;
			 }
		  }
		</style>
	 </head>
	 
	 <body style="background-color:#F4F4F4;">
		<div style="background-color:#F4F4F4;">
		  <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
		  <div style="margin:0px auto;max-width:600px;">
			 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
				<tbody>
				  <tr>
					 <td style="direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;">
						<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:402px;" ><![endif]-->
						<div class="mj-column-per-67 mj-outlook-group-fix"
						  style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
						  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
							 width="100%">
							 <tr>
								<td align="left"
								  style="font-size:0px;padding:0px 0px 0px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
								  <div
									 style="font-family:Arial, sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
									 <p class="text-build-content" data-testid="OHOMIRlqfga"
										style="margin: 10px 0; margin-top: 10px; margin-bottom: 10px;">Сообщите получателям краткое
										изложение вашего письма</p>
								  </div>
								</td>
							 </tr>
						  </table>
						</div>
						<!--[if mso | IE]></td><td class="" style="vertical-align:top;width:198px;" ><![endif]-->
						<div class="mj-column-per-33 mj-outlook-group-fix"
						  style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
						  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
							 width="100%">
							 <tr>
								<td align="left"
								  style="font-size:0px;padding:0px 25px 0px 0px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
								  <div
									 style="font-family:Arial, sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
									 <p class="text-build-content"
										style="text-align: right; margin: 10px 0; margin-top: 10px; margin-bottom: 10px;"
										data-testid="Kyoz6JE477V"><a class="link-build-content"
										  style="color:inherit;; text-decoration: none;" target="_blank" href="[[PERMALINK]]"><span
											 style="color:#55575d;font-family:Arial;font-size:13px;line-height:22px;">Посмотреть
											 онлайн-версию</span></a></p>
								  </div>
								</td>
							 </tr>
						  </table>
						</div>
						<!--[if mso | IE]></td></tr></table><![endif]-->
					 </td>
				  </tr>
				</tbody>
			 </table>
		  </div>
		  <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
		  <div style="margin:0px auto;max-width:600px;">
			 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
				<tbody>
				  <tr>
					 <td
						style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:0px;text-align:center;">
						<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
						<div class="mj-column-per-100 mj-outlook-group-fix"
						  style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
						  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
							 width="100%">
							 <tr>
								<td align="center"
								  style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;">
								  <table border="0" cellpadding="0" cellspacing="0" role="presentation"
									 style="border-collapse:collapse;border-spacing:0px;">
									 <tbody>
										<tr>
										  <td style="width:600px;"><img alt="" height="auto"
												src="http://191n.mj.am/tplimg/191n/b/040q/qz83.png"
												style="border:none;border-radius:px;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;"
												width="600"></td>
										</tr>
									 </tbody>
								  </table>
								</td>
							 </tr>
						  </table>
						</div>
						<!--[if mso | IE]></td></tr></table><![endif]-->
					 </td>
				  </tr>
				</tbody>
			 </table>
		  </div>
		  <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
		  <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
			 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
				style="background:#ffffff;background-color:#ffffff;width:100%;">
				<tbody>
				  <tr>
					 <td style="direction:ltr;font-size:0px;padding:20px 0px 0px 0px;text-align:center;">
						<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
						<div class="mj-column-per-100 mj-outlook-group-fix"
						  style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
						  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
							 width="100%">
							 <tr>
								<td align="left"
								  style="font-size:0px;padding:0px 25px 0px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
								  <div
									 style="font-family:Arial, sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
									 <h1 class="text-build-content" data-testid="SyEU4OxDGns"
										style="margin-top: 10px; margin-bottom: 10px; font-weight: normal;">Привет любимая</h1>
								  </div>
								</td>
							 </tr>
							 <tr>
								<td align="left"
								  style="font-size:0px;padding:0px 25px 0px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
								  <div
									 style="font-family:Arial, sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
								  </div>
								</td>
							 </tr>
						  </table>
						</div>
						<!--[if mso | IE]></td></tr></table><![endif]-->
					 </td>
				  </tr>
				</tbody>
			 </table>
		  </div>
		  <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
		  <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
			 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
				style="background:#ffffff;background-color:#ffffff;width:100%;">
				<tbody>
				  <tr>
					 <td style="direction:ltr;font-size:0px;padding:0px 0px 20px 0px;text-align:center;">
						<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
						<div class="mj-column-per-50 mj-outlook-group-fix"
						  style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
						  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
							 width="100%">
							 <tr>
								<td align="center"
								  style="font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:0px;word-break:break-word;">
								  <table border="0" cellpadding="0" cellspacing="0" role="presentation"
									 style="border-collapse:collapse;border-spacing:0px;">
									 <tbody>
										<tr>
										  <td style="width:250px;"><img alt="" height="auto"
												src="https://x7nms.mjt.lu/tplimg/x7nms/b/07qm7/1l2x.jpeg"
												style="border:none;border-radius:px;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;"
												width="250"></td>
										</tr>
									 </tbody>
								  </table>
								</td>
							 </tr>
							 <tr>
								<td align="left"
								  style="font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:0px;word-break:break-word;">
								  <div
									 style="font-family:Arial, sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
									 <p style="text-align: left; margin: 10px 0; margin-top: 10px;"><span
										  style="line-height:22px;font-size:13px;font-family:Arial;color:#55575d;text-align:left;">This
										  is a first column of text.</span></p>
									 <p style="text-align: left; margin: 10px 0; margin-bottom: 10px;"><span
										  style="line-height:22px;font-size:13px;font-family:Arial;color:#55575d;text-align:left;">If
										  you have stored contact properties with your contacts, you can include personalization
										  variables such as first name, last name in your message content.</span></p>
								  </div>
								</td>
							 </tr>
						  </table>
						</div>
						<!--[if mso | IE]></td><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
						<div class="mj-column-per-50 mj-outlook-group-fix"
						  style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
						  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
							 width="100%">
							 <tr>
								<td align="center"
								  style="font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:0px;word-break:break-word;">
								  <table border="0" cellpadding="0" cellspacing="0" role="presentation"
									 style="border-collapse:collapse;border-spacing:0px;">
									 <tbody>
										<tr>
										  <td style="width:250px;"><img alt="" height="auto"
												src="https://x7nms.mjt.lu/tplimg/x7nms/b/07qm7/1l20.jpeg"
												style="border:none;border-radius:px;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;"
												width="250"></td>
										</tr>
									 </tbody>
								  </table>
								</td>
							 </tr>
							 <tr>
								<td align="left"
								  style="font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:0px;word-break:break-word;">
								  <div
									 style="font-family:Arial, sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
									 <p style="text-align: left; margin: 10px 0; margin-top: 10px;"><span
										  style="line-height:22px;font-size:13px;font-family:Arial;color:#55575d;text-align:left;">This
										  is a second column of text.</span></p>
									 <p style="text-align: left; margin: 10px 0; margin-bottom: 10px;"><span
										  style="line-height:22px;font-size:13px;font-family:Arial;color:#55575d;text-align:left;">You
										  can duplicate blocks of content and use drag and drop to move them to different
										  sections.</span></p>
								  </div>
								</td>
							 </tr>
						  </table>
						</div>
						<!--[if mso | IE]></td></tr></table><![endif]-->
					 </td>
				  </tr>
				</tbody>
			 </table>
		  </div>
		  <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
		  <div style="margin:0px auto;max-width:600px;">
			 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
				<tbody>
				  <tr>
					 <td style="direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;">
						<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
						<div class="mj-column-per-100 mj-outlook-group-fix"
						  style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
						  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
							 width="100%">
							 <tr>
								<td align="left"
								  style="font-size:0px;padding:0px 20px 0px 20px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
								  <div
									 style="font-family:Arial, sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
									 <p class="text-build-content"
										style="text-align: center; margin: 10px 0; margin-top: 10px; margin-bottom: 10px;"
										data-testid="yxzq6JCZiIVh"><span
										  style="color:#55575d;font-family:Arial;font-size:13px;line-height:22px;">Это письмо было
										  отправлено на [[EMAIL_TO]], нажмите здесь, чтобы отказаться от подписки.</span></p>
								  </div>
								</td>
							 </tr>
							 <tr>
								<td align="left"
								  style="font-size:0px;padding:0px 20px 0px 20px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
								  <div
									 style="font-family:Arial, sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
									 <p class="text-build-content"
										style="text-align: center; margin: 10px 0; margin-top: 10px; margin-bottom: 10px;"
										data-testid="34QCLqdtYpHI"><span
										  style="color:#55575d;font-family:Arial;font-size:13px;line-height:22px;">ОТ</span></p>
								  </div>
								</td>
							 </tr>
						  </table>
						</div>
						<!--[if mso | IE]></td></tr></table><![endif]-->
					 </td>
				  </tr>
				</tbody>
			 </table>
		  </div>
		  <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
		  <div style="margin:0px auto;max-width:600px;">
			 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
				<tbody>
				  <tr>
					 <td style="direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;">
						<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
						<div class="mj-column-per-100 mj-outlook-group-fix"
						  style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
						  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
							 <tbody>
								<tr>
								  <td style="vertical-align:top;padding:0;">
									 <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
										<tr>
										  <td align="center"
											 style="font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
											 <div
												style="font-family:Arial, sans-serif;font-size:11px;letter-spacing:normal;line-height:22px;text-align:center;color:#000000;">
												<p class="text-build-content" data-testid="u8nQtM2sMALw"
												  style="margin: 10px 0; margin-top: 10px; margin-bottom: 10px;">Это письмо было
												  отправлено на [[EMAIL_TO]], нажмите здесь, чтобы отказаться от подписки .</p>
											 </div>
										  </td>
										</tr>
										<tr>
										  <td align="center"
											 style="font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
											 <div
												style="font-family:Arial, sans-serif;font-size:11px;letter-spacing:normal;line-height:22px;text-align:center;color:#000000;">
												<p class="text-build-content" data-testid="UWlKUEdI28JZ"
												  style="margin: 10px 0; margin-top: 10px; margin-bottom: 10px;">ОТ</p>
											 </div>
										  </td>
										</tr>
									 </table>
								  </td>
								</tr>
							 </tbody>
						  </table>
						</div>
						<!--[if mso | IE]></td></tr></table><![endif]-->
					 </td>
				  </tr>
				</tbody>
			 </table>
		  </div>
		  <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
		  <div style="margin:0px auto;max-width:600px;">
			 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
				<tbody>
				  <tr>
					 <td style="direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;">
						<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
						<div class="mj-column-per-100 mj-outlook-group-fix"
						  style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
						  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
							 <tbody>
								<tr>
								  <td style="vertical-align:top;padding:0;">
									 <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
										<tr>
										  <td align="center"
											 style="font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
											 <div
												style="font-family:Arial, sans-serif;font-size:11px;letter-spacing:normal;line-height:22px;text-align:center;color:#000000;">
												<p style="margin: 10px 0;">This e-mail has been sent to [[EMAIL_TO]], <a
													 href="[[UNSUB_LINK_EN]]" style="color:inherit;text-decoration:none;"
													 target="_blank">click here to unsubscribe</a>.</p>
											 </div>
										  </td>
										</tr>
										<tr>
										  <td align="center"
											 style="font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
											 <div
												style="font-family:Arial, sans-serif;font-size:11px;letter-spacing:normal;line-height:22px;text-align:center;color:#000000;">
												<p style="margin: 10px 0;"> BY</p>
											 </div>
										  </td>
										</tr>
									 </table>
								  </td>
								</tr>
							 </tbody>
						  </table>
						</div>
						<!--[if mso | IE]></td></tr></table><![endif]-->
					 </td>
				  </tr>
				</tbody>
			 </table>
		  </div>
		  <!--[if mso | IE]></td></tr></table><![endif]-->
		</div>
	 </body>`
	}
}