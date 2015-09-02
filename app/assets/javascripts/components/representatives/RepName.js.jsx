var RepName = React.createClass({
	render: function() {
		var partyImage

		if (this.props.party == "D"){
			partyImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAErUlEQVR4Xu2aS3LbRhCGuxEqVQAXZk4Q+gShTmBzGYMpSScIZTJryyewfAIra4MRfQLJFSFeSj6BpROIOUGkBcFUAqBTjQcJgoPHUGAMiOBO4qBn+pvunsY/RNjyD265/1ADqCNgywlUOgVemrO+AnQKQNe2pnXHXbyT3c/KAuhfUuubqXWLiC12mog+jHrN/tYAGP4+ew4KXYYOE9Gd09SeykZBZSMgDoBBuICHv+nqOBoF/jh4RgSTUU/9EI+QRwWAa4GhN3fZyf6nWbvh0CkgPJ877WLX+Em9ikKoLIDBH9N9JDxb3dHGLoGzB0DHK/WA4LXR004eBYChOT0GwDcyRQ+hsfte//b6UQAYXEzHiPizBIDPhq4t0iF4sJIpED8CsyHQva0onfGP6uRRFMGBOT1FwPxnviD3QxCViwBp5wE+Grq2nxQllQKwhvPcIaY2SJUBsI7zi11f9AeVrAEPc953mQB+HenaUeUAFOF86LSoVS51ChTpfPDGeKfgTjfaDJUWQNHOz98aASaOpu6Gb42ZAPym4+89RGhnNxwPH0FAHQDoIGxwPoIro6d1ebWpAH4x/+m49O9lKDo83L0yWaC3ht48TgTg7bw1+7LRnfjKPGwFnyYCWONl4yu7Iz89y2hCACK1Rd58+Z/gLlEIYGBat+mhT/cA+CSviwTwJwJ8n3c8gJz9/HZXR64AyBIa2JmRrrWHpnUOAHt5Judca7huP5+AQfeG3mzJpKAXygj7MpsS9AU3SwC46hPYX9KcClvKhSafjoCIbka9ZsfT6Fy6zQIWyttJklf8+XBD+P+8JiT3CBF/yJonALBcA4YX1uWSiLiw8pEFR/7TVpQxCwt8SjQsy+utCbCFAK/mzQbRDSJwhAC4ylUoRA4vrCNA8nT8WDTM7SPsnIedmh+Nq/ajziUpwYRuP10x8kWSeQT4i4N3QnIpggKPj0cOAZyPdO0gaRdWjlhJ+3PQQTomzuNFHaceHMXTIwTnAcglMRGcGD3tdXyygWm9AqLjlWaJ4Mpuqgfxiwo+YQjdM8H4E7upvo2PD8L6nbAZywAXXWuQsvtc+UGB89GLphehHoCBaZ0hcBHJyGekg/DBEFzDmv2V+JRggYOL6XVSjpKUfbq3Na0texMUXyvmP/P96uw5/mnWDgXGtNMglKGXxyfJ2bL2/VY2a9Oyvse0HYk97MnKQ3P2hi8dOM8dTT30C6FYnzd0DbmagwuniDBB2Dkk12lF7/Qic0jZtzX1u4fuvpcCfjWf8X1a9Ez/HCzsWRQCATuxeEvz8omNBDe0cdrC8YjcfQnfLPPaX/cmWBQNsVOAr5Pwid+4EENZApAVTv/X97w+kca/zvwrjZADTodvWIemxZeIZQSQKnPLQkh8GywtAMENr6zT0fFVAyC839sIAK+744pdoo/dgElRuR+6lakJlsj/jSylBpCElVMA0Mktemxke2JG379Qw/6ksOkqVQS5syzM88BQDSCJaBn7gDoC6hQoXw0opDPLq0mUMQVqAKLf3skeVXUExH75nQSwToESngJ1DahrgOAHyHURlCRQylNA0ofKDi/89bJqJGoAVduxote79RHwH0ios/hmR7yAAAAAAElFTkSuQmCC"
		}
		else if (this.props.party == "R") {
			partyImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEY0lEQVR4Xu1aQXbaSBCtKs1+LHyA8ZxgyAmCTxA4wST7gGWYWdteTyAKZG9yApMTmJxgyAnCBYzIAdQ1rySLYKGWWkDeWNBa+dnV7arf/1eV1IVw5A8eefxgAbAMOHIErASOnAA2Ce4kgaB9+RIQG8xYB4CTiE3IdQCMfzZ6eAmMs0fTJSJMgeiL6/+T/M5ol22NSgMQvP2rwcgXgNwoF2hZF3nJDBNynA8/EwxjAIK3vSYjXABCo2woO9szTJHxxv34brrzXqkNCgEIPO+EQ+cWEJr7/udl92Nmnxx14/r+suxanX0uANGpE9+mqc7ANwggWn9l5AjDdwT2GNAHhF9N1qCCFiOI/W9P7XmO5LT2JQstAEG7+5oRbzecZfheG/VPAu/vOiv1r0kwDPDhdNj3Hjq9MQL8WbyGP9eGg2bQ7nqM+H7TnpeoqLUPSWQCoA0eABjg0+mw/1qcWrR7880T2nQXFZ6LszGj4K4IAGS+dEcDP/C8M1bONy19md+4o8G4aL+8v28AEGV54vv1RckJ5m20aHdngPhHYoMU/u76/ly3Js0gobz7sT/R23snrJwgJYclknO+ixyeABAlPEXfMsrbDCls6QKKQVN36+sQ+NodDm50AT20u7eIGDFJHmYek6MudQku6PQuGMDPkMMcSb3YNjE+AWDR7t3ry1y27vQ6jfQyRScCbpW1Y5AdYZg0T6lHEpw6TwO9aPfucqsQw6Q26re2kcIKABN9YobmchPbY8Jcd+wRgBSVf1hkScck1yR5piwIKwAWna5Q/yw3YVDoymkKWPALzUV7ecAlCVOCBuW8Ago/y/pFpzvJLKHMX2ujQcQMoTxQ+EnsHzo9HwEucoNjmNZG/fOtAMjL+j82jOmpQrpKtIsAnvTtunIoyZMUTpiU9BIC7gyJ3nCorjIpzTBBJ7xk5UilqAPEsgNU9exy+DTcbVgQMUB7ImXh/J/t10u0qStYpEnTjZ6HHS9rw4FbxhcB4EwpWpWjMoufoy2RGuf1H2mfC1+GnmOQ+/TJArBPNKu4F0bd34E9ZfoBXHR6fGDxQ23YN5a2BcAywErA5gCbBG0VODAEbBlM9QHyzRJIvcw656PoAx463WsEvKo8APLBA4DnyNBc/wSfDiwtgYMAQK7jToeD6+h7YXxfOdNdyhwkAOnvfXlfo38aAGWyq0lhybqF0q3bBECvawtAqgrsLQdYBpR4z7YSMEDA5oCMq3ibBDUI7FYF9JMppVrhqiTBZMIkbppklCe8zxzpY/5aWQAKZ5QY4pG6nLE+ubytLADRpa7hjFJeXqk0AGbX+prwmb/URoNGpQGIWdCdAmLmu762EsvcohOeyfBF5QGI3wxJQFhNqOW2IFHw1EgmyyoPQBJsXr+f2Mj3BKLQWx/aQllo0LRFJsn7uKl9kV2Z2QSTe3/ZD0JqMqzmmmVsf8mIMyIaZ80TGt+hFQVT1b9bAKp6cvvy2zJgX0hWdR/LgKqe3L78PnoG/Af0IvORu5QElgAAAABJRU5ErkJggg=="
		} else {
			party = "Unaffiliated"
		}

		return (
		<div className="card-content">
			<span className="card-title activator grey-text text-darken-4">
				{this.props.title}. {this.props.first_name} {this.props.last_name}
				<img src={partyImage} className="party-pic" />
				<i className="material-icons right">more_vert</i>
			</span>
		</div>
		)
	}
})





