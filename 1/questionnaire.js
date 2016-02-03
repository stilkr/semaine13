/*vilaine copie T_T */

var AppQCM = angular.module ('AppQCM', []); 		
AppQCM.controller('Questionnaire',['$scope',function($scope) {
		$scope.numquestion = 0;
		$scope.points = 0;
		$scope.categorie1 = 0;
		$scope.categorie2 = 0;
		$scope.categorie3 = 0;
		$scope.categorie4 = 0;
		$scope.domaine ="";
		$scope.visuel = "block";
		$scope.resultat = "none";
		$scope.texte = "";
		$scope.image = "";
		$scope.soluce1 = "";
		$scope.title ="Testez vos connaissances sur le cinéma suédois récent";
					
	
		$scope.questions = [
	
			{id:"01",
				 categorie:"culture générale",
				 q:"Quel film suédois a obtenu le Grand Prix du Jury au Festival de Cannes en 2000 ?",
				 image: 'img/1.gif',
				 reponseA:"Dancer in the Dark",
				 reponseB:"Chansons du deuxième étage",
				 reponseC:"Together",
				 reponseD:"Infidèle",
				 correct:"reponseB",
				 bonneReponse:"C'est le premier film de la Trilogie des vivants de Roy Andersson (Chansons du deuxième étage - Sånger från andra våningen) qui a gagné ce prix.",
				 lien: ' http://dai.ly/xgxvwt ',
				 points:20,
				 pointscat1:20,
				 pointscat2:0				
			},
			
			{id:"02",
				 categorie:"connaissances de pointe",
				 q:"Quel est le titre du premier film suédois distribué simultanément en salles et en e-cinema ?",
				 image: 'img/2.gif',
				 reponseA:"Greetings from the woods",
				 reponseB:"Hassel",
				 reponseC:"Dirty Diaries",
				 reponseD:"Miss Kicki",
				 correct:"reponseA",
				 bonneReponse:"C'est le documentaire Greetings from the woods (Hälsningar från Skogen), produit par Ruben Östlund, qui a bénéficié de cette forme de distribution hybride dès mars 2009.",
				 lien: ' https://vimeo.com/54281235 ',
				 points:20,
				 pointscat1:0,
				 pointscat2:20
			},
			
			{id:"03",
				 categorie:"culture générale",
				 q:"Comment s'intitule le premier long-métrage de Ruben Östlund ?",
				 image: 'img/3.gif',
				 reponseA:"Happy Sweden",
				 reponseB:"Play",
				 reponseC:"Snow Therapy",
				 reponseD:"The Guitar Mongoloid",
				 correct:"reponseD",
				 bonneReponse:"C'est The Guitar Mongoloid (Gitarrmongot)!",
				 lien: ' http://www.cineaster.net/index.php/2015/01/27/le-gogol-a-la-guitare-gitarrmongot-ruben-ostlund/ ',
				 points:20,
				 pointscat1:20,
				 pointscat2:0
			},
			
			{id:"04",
				 categorie:"connaissances de pointe",
				 q:"Pour le quotidien Dagens Nyheter (DN), quel était le meilleur film suédois des années 2000-2009 ?",
				 image: 'img/4.gif',
				 reponseA:"Morse",
				 reponseB:"Nous les vivants",
				 reponseC:"Darling",
				 reponseD:"Adieu Falkenberg",
				 correct:"reponseC",
				 bonneReponse:"Darling, le premier long-métrage de Johan Kling, toujours inédit en France (!), est sorti vainqueur de ce classement.",
				 lien: ' http://www.cineaster.net/index.php/2015/04/01/darling-johan-kling-2007/ ',
				 points:20,
				 pointscat1:0,
				 pointscat2:20
			},
			
			{id:"05",
				 categorie:"culture générale",
				 q:"Comment s'intitule le meilleur court-métrage suédois de 2015 ?",
				 image: 'img/5.gif',
				 reponseA:"Stoerre Vaerie",
				 reponseB:"Kung Fury",
				 reponseC:"Boys",
				 reponseD:"Audition",
				 correct:"reponseB",
				 bonneReponse:"C'est bien sûr Kung Fury :P (Si vous ne l'avez pas encore vu, cliquez sur En savoir plus).",
				 lien: ' https://youtu.be/bS5P_LAqiVg\ ',
				 points:20,
				 pointscat1:20,
				 pointscat2:0
			}


		];

		$scope.questionnaire = $scope.questions[$scope.numquestion];

		
	function cat (){
		if ($scope.numquestion < 5){
			$scope.domaine = $scope.questions[$scope.numquestion].categorie;
		}
		else{
			$scope.domaine = "";
		};
	}	
		
		
	$scope.clear = function () {
		cat();
		$scope.numquestion = 0;
		$scope.points = 0;
		$scope.categorie1 = 0;
		$scope.categorie2 = 0;
		$scope.categorie3 = 0;
		$scope.categorie4 = 0;
		$scope.domaine ="culture générale";
		$scope.visuel = "block";
		$scope.resultat = "none";
		$scope.texte = "";
		$scope.image = "";
		$scope.questionnaire = $scope.questions[$scope.numquestion];
		$scope.image = $scope.questions[$scope.numquestion].image;

					
    };
		
		
		$scope.valider = function() {
			
			if ($scope.reponse == $scope.questions[$scope.numquestion].correct)
			{
				$scope.points += $scope.questions[$scope.numquestion].points;
				$scope.categorie1 += $scope.questions[$scope.numquestion].pointscat1;
				$scope.categorie2 += $scope.questions[$scope.numquestion].pointscat2;
			}
			
			$scope.numquestion += 1;
			cat();
			
			if ($scope.numquestion >= 5)
			{
				$scope.questionnaire ="";
				$scope.visuel = "none";
				$scope.resultat = "block";
				
				if ($scope.points ==100)
				{
					$scope.texte = "Vous connaissez bien mon sujet de prédilection : Bravo !";
				}
				else if ($scope.categorie1 == 60)
				{
					$scope.texte = "Vous devriez relire 15 ans de cinéma suédois contemporain !";
				}
				else if ($scope.categorie2 == 40)
				{
					$scope.texte = "Avouez que vous avez cliqué au hasard !";
				}
				
				else if ($scope.categorie1 == 40)
				{
					$scope.texte = "Il est temps de s'abonner à la page Facebook";
				}
				else if ($scope.categorie2 == 20)
				{
					$scope.texte = "Il y a autre chose que le cinéma US dans la vie, hein !";
				}
			}
			else {
				$scope.questionnaire = $scope.questions[$scope.numquestion];
			
				
			}
			
			$scope.reponse = "";

		};
					
			$scope.domaine = $scope.questions[$scope.numquestion].categorie;
			
		
			
	}]);