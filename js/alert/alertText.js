var alertText = {
	general: {
		success: {
			type: 'success',
			text: 'Başarılı',
		},
		failed: {
			type: 'danger',
			text: 'Başarısız',
		}
	},
	ajax: {
		success: {
			type: 'success',
			text: 'Sorgu Başarılı',
		},
		error: {
			type: 'danger',
			text: 'Sorgu Başarısız',
		},
		complete: {
			type: 'info',
			text: 'Sorgu Tamamlandı',
		}
	},
	accountPages: {
		login: {
			emptyUserName: {
				type: 'warning',
				text: 'Kullanıcı adı giriniz'
			},
			emptyPassword: {
				type: 'warning',
				text: 'Şifre giriniz',
			},
			loginSuccessfully: {
				type: 'success',
				text: 'Giriş başarılı'
			},
			loginFailed: {
				type: 'danger',
				text: 'Giriş başarısız'
			}
		}
	},
	validation: {
		fillRequiredAreas: {
			type: 'danger',
			text: 'Gerekli alanları doldurunuz'
		}
	},
	fileUpload: {
		fileHasError: {
			type: 'danger',
			text: 'Hatalı medya'
		},
		fileExtensionNotSupported: {
			type: 'danger',
			text: 'Dosya uzantısı desteklenmiyor'
		},
		fileNameExceedLimit: {
			type: 'danger',
			text: 'Dosya adı maksimum karakter limitinden uzun'
		},
		fileNameHasSpecialChar: {
			type: 'warning',
			text: 'Dosya adı özel karakter içeriyor lütfen düzenleyiniz'
		}
	}
}
