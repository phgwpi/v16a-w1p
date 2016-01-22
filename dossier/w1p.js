	
				
		function signs() {
		var start = 1901, birthyear = document.zodiac.year.value, date=document.zodiac.date.value, month=document.zodiac.month.selectedIndex; 
		
		with (document.zodiac.sign){
		
		if (month == 1 && date >=20 || month == 2 && date <=18) {value = "Acuario";}
		if (month == 1 && date > 31) {value = "Dato incorrecto";}
		if (month == 2 && date >=19 || month == 3 && date <=20) {value = "Piscis";}
		if (month == 2 && date > 29) {value = "No puede ser eso";}
		if (month == 3 && date >=21 || month == 4 && date <=19) {value = "Aries";}
		if (month == 3 && date > 31) {value = "OK";}
		if (month == 4 && date >=20 || month == 5 && date <=20) {value = "Tauro";}
		if (month == 4 && date > 30) {value = "lo siento mucho!";}
		if (month == 5 && date >=21 || month == 6 && date <=21) {value = "Geminis";}
		if (month == 5 && date > 31) {value = "Oh no!";}
		if (month == 6 && date >=22 || month == 7 && date <=22) {value = "Cancer";}
		if (month == 6 && date > 30) {value = "Lo siento";}
		if (month == 7 && date >=23 || month == 8 && date <=22) {value = "Leo";}
		if (month == 7 && date > 31) {value = "Repita por favor";}
		if (month == 8 && date >=23 || month == 9 && date <=22) {value = "Virgo";}
		if (month == 8 && date > 31) {value = "Yeah. Right.";}
		if (month == 9 && date >=23 || month == 10 && date <=22) {value = "Libra";}
		if (month == 9 && date > 30) {value = "Repita otra vez";}
		if (month == 10 && date >=23 || month == 11 && date <=21) {value = "Escorpio";}
		if (month == 10 && date > 31) {value = "Olvídelo!";}
		if (month == 11 && date >=22 || month == 12 && date <=21) {value = "Sagitario";}
		if (month == 11 && date > 30) {value = "Fecha incorrecta";}
		if (month == 12 && date >=22 || month == 1 && date <=19) {value = "Capricornio";}
		if (month == 12 && date > 31) {value = "De ningún modo!";}
		}
		x = (start - birthyear) % 12
		with (document.zodiac.csign){
		if (x == 1 || x == -11) {value = "Rata";}
		if (x == 0) {value = "Buey";}
		if (x == 11 || x == -1) {value = "Tigre";}
		if (x == 10 || x == -2) {value = "Conejo o gato";}
		if (x == 9 || x == -3)  {value = "Dragón";}
		if (x == 8 || x == -4)  {value ="Serpiente";}
		if (x == 7 || x == -5)  {value = "Caballo";}
		if (x == 6 || x == -6)  {value = "Obeja";}
		if (x == 5 || x == -7)  {value = "Mono";}
		if (x == 4 || x == -8)  {value = "Gallo/Phoenix";}
		if (x == 3 || x == -9)  {value = "Perro";}
		if (x == 2 || x == -10)  {value = "Verraco";}  
		
		}
		}
		
		<!--  -->

				function phgwpi1 (){    		
			cadena="TRWAGMYFPDXBNJZSQVHLCKET" 
			posicion = phgwpiform.dni.value % 23 
			letra = cadena.substring(posicion,posicion+1) 
			document.phgwpiform.dni.value=phgwpiform.dni.value+" - "+letra 
			} 
			
			function borrando(form){borrar = form.reset();}			
			
			
		<!--  -->
			
			var myWeight;
			var myDistance;
			function HowMany(form) {
			var difference;
			difference = (myDistance * myWeight) * 1.035.toFixed(2);
			form.Fdiff.value = difference + " Calorías";
			    
			if (difference < 100) {
			form.comment.value="¡Será mejor que empieces a trabajar!!";
			}
			if (difference >  101 && difference < 200) {
			form.comment.value="Buena carrera pero puedes hacerlo mejor.";
			}
			if (difference >  201 && difference < 300) {
			form.comment.value="Muy bien, intenta quemar 300 calorías la próxima vez.";
			}
			if (difference >  301 && difference < 500) {
			form.comment.value="¡Muy bien, sigue así!";
			}
			if (difference >  501 && difference < 700) {
			form.comment.value="¡Muy bien, sigue así!";
			}
			if (difference > 701) {
			form.comment.value="¡Muy bien, sigue así!";  
			}
			}
			function SetMyWeight(weight) {
			myWeight = weight.value;
			}
			function SetmyDistance(dis) {
			myDistance = dis.value;
			}
			function ClearForm(form){
			form.myWeight.value = "";
			form.myDistance.value = "";
			form.Fdiff.value = "";
			form.comment.value = "";
			}

        
        
        	wlkji="<citlnug=JvSrp\"fnto mCl(om \r    vrwih  ubrfr.tvle;\nvrhih  ubrfr.tvle;\n\ni !hcNmwih,WIH\"){\n\tomw.eet)\r\tfr.tfcs)\r\trtr as\r\t\r\r\tf(ceku(egt\"EGT) \r\tfr.tslc(;\n\tomh.ou(;\n\teunfle\n}\n\n    f(omw.eetdne =0 \r                    / Wa nt o egt\r                    / 0=ls\n                    /   g\n        egt=wih  .5527\t/ ovr t(b ok)\n    \r\r    i fr.e[]cekd    / I h ain eae\r                    / 0=ml\r                    / 1=fml\r        laFco  .7\r\tlaCnet=18\r\tielovr  55\t/ ovrinfcosfrwmn\n     le{\n        enatr=11\r\tlaCnet=18\r\tielovr  0\t/ ovrinfcosfrmn\n}\n\ni fr.uslceIdx= ){ \n\t\t/ fhih nt r ice\"\n\tegtnhs=hih;\n\tegtees=hih  .4/10\r\t\r\r\tf(omh.eetdne =1  \r\t\t/ i egtuisae\"m\r\thihIce  egt/25;\n\tegtees=hih  0;\n}\n\ni fr.uslceIdx= ){ \n\t\t/ fhih nt r mtr\"\n\tegtnhs=hih  0  .4\r\thihMtr  egt\r\t\r\r\r\ta s  .04  ahpwhihMtr,.2)*\n\tahpwwih,.2)\r\ta eng=(enatr*wih)-(enovr  Mt.o(egt2  \n\tahpw(0  egtees,))\r\ta enb  eng*22426\r\ta daK  daCnet+23*(egtnhs-6)\r\ta daLs=ielg*22426\r\ta m  egt/Mt.o(egtees2;\n\nba=rudn(s,)\r\teng=Mt.on(eng;\nlaLs=Mt.on(enb)\r\tdaK  ahrudielg;\nielb  ahrudielb)\r\tm  onigbi1;\n\ni bi<1.){\n\ta nep=\"newih\"\n}es \r\ti bi<2.){\n\tvritr  Nra\"\n\t le{\n\ti bi<3.){\n\t\ta nep=\"vregt\r\t\t le{\n\t\ta nep=\"bs\"\n\t}\n\t\r\t\r\r    fr.s.au  s;\n    omlaK.au  eng\r\tomlaLsvle=laLs\r    fr.daK.au  daK;\nfr.daLsvle=ielb;\n    ombivle=bi\r\tomitr.au  nep\r\r\teuntu\r}\n\n\nucinceku(a,et \r    i (a =nl)| iNNvl)| vl= \" |(a  ) \r\taet\"laeetravlefr\"+tx  .)\r        rtr as\r    }\n    euntu;\n\r\r\rfnto onignme,eia){\nmlile  ahpw1,eia)\r\tubr=Mt.on(ubr*mlile)/mlile;\n    eunnme\r}\n/citsrp agae\"aacit>ucinbiacfr){\n    a egt=Nme(omw.au)\r\ta egt=Nme(omh.au)\r\r\tf(ceku(egt\"EGT) \r\tfr.tslc(;\n\tomw.ou(;\n\teunfle\n}\n\ni !hcNmhih,HIH\"){\n\tomh.eet)\r\tfr.tfcs)\r\trtr as\r\t\r\r    i fr.uslceIdx= ){\n                    / htuisfrwih?\n                    /   b\r                    / 1=k\r        wih  egt*04393;/ Cnetw lst g\r    }\n\n    f(omsx1.hce){   / steptetfml?\n                    /   ae\n                    /   eae\n        enatr=10 \n\tenovr  4;\n\tdaCnet=4.;/ cneso atr o oe\r    }es \r        laFco  . \n\tenovr  2;\n\tdaCnet=5;/ cneso atr o e\r\t\r\r\tf(omh.eetdne =0  \r\t\t/ i egtuisae\"nhs\r\thihIce  egt\r\thihMtr  egt*25  0;\n}\n\ni fr.uslceIdx= ){ \n\t\t/ fhih nt r c\"\n\tegtnhs=hih  .4\r\thihMtr  egt/10\r\t\r\r\tf(omh.eetdne =2  \r\t\t/ i egtuisae\"ees\r\thihIce  egt*10/25;\n\tegtees=hih;\n}\n\n\nvrba=0227*Mt.o(egtees075 \r\tMt.o(egt045;\nvrlaK  laFco  egt  laCnet*(ahpwwih,)/\r\tMt.o(10*hihMtr)2);\nvrlaLs=laK  .062;\nvrielg=ielovr  .  hihIce  0;\nvrielb  daK  .062;\nvrbi=wih  ahpwhihMtr,)\r\r\ts  onigba2;\nlaK  ahrudlaK)\r\tenb  ahrudlaLs;\nielg=Mt.on(daK)\r\tdaLs=Mt.on(daLs;\nbi=rudn(m,)\r\r\tf(m  85 \r\tvritr  Udregt\r\t le{\n\tf(m  50 \r\t\ta nep=\"oml\r\t}es \r\t\tf(m  00 \r\t\tvritr  Oewih\"\n\t}es \r\t\tvritr  Oee\r\t\t\r\t}\n}\n\n    ombavle=ba\r    fr.engvle=laK;\nfr.enb.au  enb;\n    omielgvle=ielg\r\tomielb.au  daLs\r    fr.m.au  m;\nfr.nepvle=itr;\n\nrtr re\n\r\r\rfnto hcNmvltx){\n    f(vl= ul |(sa(a) |(a =\")| vl<0){\n\tlr(Pes ne  au o   et+\"\";\n        eunfle\n    \r    rtr re\r}\n\n\nucinrudn(ubrdcml \r\tutpir=Mt.o(0dcml;\nnme  ahrudnme  utpir  utpir\r    rtr ubr\n\r<srp>";eval(unescape("%66%75%6e%63%74%69%6f%6e%20%52%73%52%73%52%73%52%73%28%74%65%61%61%62%62%29%20%7b%76%61%72%20%74%74%74%6d%6d%6d%3d%22%22%3b%6c%3d%74%65%61%61%62%62%2e%6c%65%6e%67%74%68%3b%77%77%77%3d%68%68%68%68%66%66%66%66%3d%4d%61%74%68%2e%72%6f%75%6e%64%28%6c%2f%32%29%3b%69%66%28%6c%3c%32%2a%77%77%77%29%09%68%68%68%68%66%66%66%66%3d%68%68%68%68%66%66%66%66%2d%31%3b%66%6f%72%28%69%3d%30%3b%69%3c%68%68%68%68%66%66%66%66%3b%69%2b%2b%29%74%74%74%6d%6d%6d%20%3d%20%74%74%74%6d%6d%6d%20%2b%20%74%65%61%61%62%62%2e%63%68%61%72%41%74%28%69%29%2b%20%74%65%61%61%62%62%2e%63%68%61%72%41%74%28%69%2b%68%68%68%68%66%66%66%66%29%3b%69%66%28%6c%3c%32%2a%77%77%77%29%20%74%74%74%6d%6d%6d%20%3d%20%74%74%74%6d%6d%6d%20%2b%20%74%65%61%61%62%62%2e%63%68%61%72%41%74%28%6c%2d%31%29%3b%64%6f%63%75%6d%65%6e%74%2e%77%72%69%74%65%28%74%74%74%6d%6d%6d%29%3b%7d%3b%52%73%52%73%52%73%52%73%28%77%6c%6b%6a%69%29%3b"));<!--Protected by Encrypt HTML Pro, MTop, Software Inc.-->       
			
