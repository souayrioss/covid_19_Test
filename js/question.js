const questions = [
    {
      // 0
      question:
        'Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs)?',
      typeQuestion: 'choix',
      type: 'radio',
      choix: ['oui', 'non'],
      icon: ['<i class="bi bi-check2"></i>', '<i class="bi bi-x-lg"></i>'],
      reponse: null,
    },
    {
      // 1
      question: 'Quelle est votre température corporelle ?',
      typeQuestion: 'text',
      type: 'number',
      min: '34',
      max: '41',
      reponse: null,
    },
    {
      // 2
      question:
        'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',
      typeQuestion: 'choix',
      choix: ['oui', 'non'],
      icon: ['<i class="bi bi-check2"></i>', '<i class="bi bi-x-lg"></i>'],
      type: 'radio',
      reponse: null,
    },
    {
      // 3
      question:
        'Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?',
      typeQuestion: 'choix',
      choix: ['oui', 'non'],
      icon: ['<i class="bi bi-check2"></i>', '<i class="bi bi-x-lg"></i>'],
      type: 'radio',
      reponse: null,
    },
    {
      // 4
      question: 'Ces derniers jours, avez-vous un mal de gorge ?',
      typeQuestion: 'choix',
      choix: ['oui', 'non'],
      icon: ['<i class="bi bi-check2"></i>', '<i class="bi bi-x-lg"></i>'],
      type: 'radio',
      reponse: null,
    },
    {
      // 5
      question:
        'Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.',
      typeQuestion: 'choix',
      choix: ['oui', 'non'],
      icon: ['<i class="bi bi-check2"></i>', '<i class="bi bi-x-lg"></i>'],
      type: 'radio',
      reponse: null,
    },
    {
      // 6
      question:
        'Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?',
      typeQuestion: 'choix',
      choix: ['oui', 'non'],
      icon: ['<i class="bi bi-check2"></i>', '<i class="bi bi-x-lg"></i>'],
      type: 'radio',
      reponse: null,
    },
    {
      // 7
      question:
        'Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?',
      typeQuestion: 'choix',
      choix: ['oui', 'non'],
      icon: ['<i class="bi bi-check2"></i>', '<i class="bi bi-x-lg"></i>'],
      type: 'radio',
      reponse: null,
    },
    {
      // 8
      question:
        'Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',
      typeQuestion: 'choix',
      choix: ['oui', 'non'],
      icon: ['<i class="bi bi-check2"></i>', '<i class="bi bi-x-lg"></i>'],
      type: 'radio',
      reponse: null,
    },
    {
      //9
      question: 'Actuellement, comment vous vous sentez ?',
      typeQuestion: 'choix',
      choix: ['Bien', 'Assez Bien', 'Fatigué(e)', 'Trés fatigué(e)'],
      icon: [
        '<i class="bi bi-emoji-sunglasses"></i>',
        '<i class="bi bi-emoji-smile"></i>',
        '<i class="bi bi-emoji-frown"></i>',
        '<i class="bi bi-emoji-dizzy"></i>',
      ],
      type: 'radio',
      reponse: null,
    },
    {
      // 10
      question:
        'Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique',
      typeQuestion: 'text',
      type: 'number',
      min: '15',
      max: '115',
      reponse: null,
    },
    {
      // 11
      question:
        "Quel est votre poids ? Afin de calculer l'indice de masse corporelle qui est un facteur influençant le risque de complications de l'infection.",
      typeQuestion: 'text',
      type: 'number',
      min: '20',
      max: '250',
      reponse: null,
    },
    {
      //12
      question:
        "Quelle est votre taille ? Afin de calculer l'indice de masse corporelle qui est un facteur influençant le risque de complications de l'infection.",
      typeQuestion: 'text',
      type: 'number',
      min: '80',
      max: '255',
      reponse: null,
    },
    {
      //13
      question:
        "Avez-vous de l'hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
      typeQuestion: 'choix',
      choix: ['oui', 'Non'],
      icon: ['<i class="bi bi-check2"></i>', '<i class="bi bi-x-lg"></i>'],
      type: 'radio',
      reponse: null,
    },
    {
      // 14
      question: 'Êtes-vous diabétique ?',
      typeQuestion: 'choix',
      choix: ['oui', 'Non'],
      icon: ['<i class="bi bi-check2"></i>', '<i class="bi bi-x-lg"></i>'],
      type: 'radio',
      reponse: null,
    },
    {
      // 15
      question: 'Avez-vous ou avez-vous eu un cancer ?',
      typeQuestion: 'choix',
      choix: ['oui', 'Non'],
      icon: ['<i class="bi bi-check2"></i>', '<i class="bi bi-x-lg"></i>'],
      type: 'radio',
      reponse: null,
    },
    {
      //16
      question:
        'Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?',
      typeQuestion: 'choix',
      choix: ['Oui', 'Non'],
      icon: ['<i class="bi bi-check2"></i>', '<i class="bi bi-x-lg"></i>'],
      type: 'radio',
      reponse: null,
    },
    {
      question: 'Avez-vous une insuffisance rénale chronique dialysée ?',
      typeQuestion: 'choix',
      choix: ['Oui', 'Non'],
      icon: ['<i class="bi bi-check2"></i>', '<i class="bi bi-x-lg"></i>'],
      type: 'radio',
      reponse: null,
    },
    {
      question: 'Avez-vous une maladie chronique du foie ?',
      typeQuestion: 'choix',
      choix: ['Oui', 'Non'],
      icon: ['<i class="bi bi-check2"></i>', '<i class="bi bi-x-lg"></i>'],
      type: 'radio',
      reponse: null,
    },
    {
      question: 'Êtes-vous enceinte ?',
      typeQuestion: 'choix',
      choix: ['Oui', 'Non', 'Homme'],
      icon: [
        '<i class="bi bi-check2"></i>',
        '<i class="bi bi-x-lg"></i>',
        '<i class="bi bi-gender-male"></i>',
      ],
      type: 'radio',
      reponse: null,
    },
    {
      question:
        'Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?',
      typeQuestion: 'choix',
      choix: ['Oui', 'Non'],
      icon: ['<i class="bi bi-check2"></i>', '<i class="bi bi-x-lg"></i>'],
      type: 'radio',
      reponse: null,
    },
    {
      question:
        "Prenez-vous un traitement immunosuppresseur ? C'est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
      typeQuestion: 'choix',
      choix: ['Oui', 'Non'],
      icon: ['<i class="bi bi-check2"></i>', '<i class="bi bi-x-lg"></i>'],
      type: 'radio',
      reponse: null,
    },
  ];
  
  const progress = document.querySelector('.progress-bar');
  const numberQuestion = document.getElementById('numberQuestion');
  const question = document.getElementById('question');
  const answer = document.getElementById('answer');
  const input = document.createElement('input');
  const label = document.createElement('label');
  const next = document.getElementById('next');
  const precedent = document.getElementById('precedent');
  const radios = document.getElementsByName('choix');
  let countQuestion = questions.length;
  let i = 0;
  let data = [];
  
  function getRadioValue() {
    let res;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        res = radios[i].value;
        break;
      }
    }
    return res;
  }
  
  function getNumberValue() {
    // input.addEventListener('mouseup' , function(){
    input.setAttribute('value', input.value);
    return input.value;
    // })
  }
  
  function afficheProgress() {
    let prg = (i + 1) / questions.length;
    progress.style.width = prg * 100 + '%';
    numberQuestion.textContent = i + 1 + '/22';
  }
  
  function afficheAnswer() {
    afficheProgress();
    question.textContent = questions[i].question;
    if (i == 0) {
      precedent.style.visibility = 'hidden';
    } else {
      precedent.style.visibility = 'visible';
    }
    if (questions[i].typeQuestion === 'text') {
      answer.innerHTML = '';
      answer.appendChild(input);
      input.id = questions[i].typeQuestion;
      input.className = 'form-control shadow-none w-100';
      input.style.width = '500px';
      input.name = questions[i].typeQuestion;
      input.type = questions[i].type;
      input.min = questions[i].min;
      input.max = questions[i].max;
      input.placeholder = questions[i].min + ' - ' + questions[i].max;
    }
    if (questions[i].typeQuestion === 'choix') {
      answer.innerHTML = '';
      for (let k = 0; k < questions[i].choix.length; k++) {
        let input = document.createElement('input');
        let label = document.createElement('label');
        input.id = questions[i].typeQuestion + k;
        input.type = questions[i].type;
        input.value = questions[i].choix[k];
        input.name = questions[i].typeQuestion;
        input.className = 'btn-check shadow-none ';
        input.removeAttribute('min');
        input.removeAttribute('max');
        input.removeAttribute('placeholder');
        answer.append(input);
        label.setAttribute('for', questions[i].typeQuestion + k);
        label.className = 'btn btn-outline-info1 px-5 py-3 fs-3 fw-bolder mx-5';
        label.name = questions[i].typeQuestion;
        label.textContent = questions[i].choix[k].toUpperCase();
        label.innerHTML += ' ' + questions[i].icon[k];
        answer.append(label);
      }
    }
  }
  
  afficheAnswer();
  
  next.addEventListener('click', function () {
    if (i < questions.length) {
      if (questions[i].typeQuestion === 'choix') {
        if (getRadioValue() === undefined) return;
        questions[i].reponse = getRadioValue();
        data.push(questions[i].reponse);
      }
  
      if (questions[i].typeQuestion === 'text') {
        if (getNumberValue() === '') return;
        console.log(getNumberValue());
        questions[i].reponse = getNumberValue();
        data.push(questions[i].reponse);
      }
  
      i++;
      if (i < questions.length) {
        afficheAnswer();
      }
    } else {
      console.log('display the result');
      let message = getResult(questions);
      console.log('the result is ' + message);
      displayResultInDom(message);
    }
    //console.log(data)
  });
  
  /**
   * this should take the message and insert in the dom
   * TODO:: hassan
   * @param  message
   */
  function displayResultInDom(message) {
    document.querySelector('.test__content').innerHTML = `<div class="result">
    <h3 class="result__title">Résultat</h3>
    <p class="result__message">وحال واش فيك فيروس كورونا، إذا عندك شك اتصل بالطبيب ديالك. تقد تعاود الإختبار لكانوا عندك اعراض اخرى. لبغيتي تعرف اكثر على الڤيروس ممكن تشوف صفحة النصائح</p>
    <p class="result__footer">Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.</p>
    <a class="restart-test-btn" href="test.html">Recommencer le test</a>
    </div>`;
  }
  
  precedent.addEventListener('click', function () {
    if (i > 0) {
      i--;
    }
    afficheAnswer();
  });
  
  ///////start testing results
  const getFactGravMin = (symptomps) => {
    let fact = 0;
    if (symptomps.feverDeg >= 39) fact++;
    if (symptomps.anorexia) fact++;
    if (symptomps.disconfort) fact++;
    return fact;
  };
  const getFactGravMaj = (symptomps) => {
    let fact = 0;
    if (symptomps.dyspanea) fact++;
    if (symptomps.anorexia) fact++;
    if (symptomps.feverDeg <= 35.4) fact++;
    return fact;
  };
  const getPronoFact = (poorPronoFact) => {
    if (
      poorPronoFact.age >= 70 ||
      poorPronoFact.imc >= 30 ||
      poorPronoFact.pregnancy ||
      poorPronoFact.breathingIllness ||
      poorPronoFact.cancer ||
      poorPronoFact.chronicLiverDisease ||
      poorPronoFact.chronicRenalFailure ||
      poorPronoFact.diabetes ||
      poorPronoFact.heartDisease ||
      poorPronoFact.immuneSystemDisease ||
      poorPronoFact.immunosuppressiveTherapy
    ) {
      return true;
    } else {
      return false;
    }
  };
  
  /**
   *
   * @param data :object
   * @returns string : text representing the messag eto show to the user based on the given data
   */
  const getResult = (data) => {
    data = data.map((q) => {
      q.reponse = q.reponse.toLowerCase();
      return q;
    });
  
    const OUI = 'oui';
    let symptoms = {
      fever: data[0].response == OUI,
      feverDeg: data[1].response,
      cough: data[2].response == OUI,
      muscularPain: data[3].response == OUI,
      soreThroat: data[4].response == OUI,
      diarrhea: data[5].response == OUI,
      tiredness: data[6].response == OUI,
      dyspanea: data[16].response == OUI || data[8].response == OUI,
      anorexia: data[7].response == OUI,
      disconfort:
        data[9].response == data[9].choix[2] ||
        data[9].response == data[9].choix[3],
    };
  
    let poorPronoFact = {
      imc: data[11].reponse / Math.pow(data[12].reponse, 2), // poids(kg)/taille^2
      heartDisease: data[13].reponse == OUI,
      diabetes: data[14].reponse == OUI,
      cancer: data[15].reponse == OUI,
      breathingIllness: data[16].reponse == OUI,
      chronicRenalFailure: data[17].reponse == OUI,
      chronicLiverDisease: data[18].reponse == OUI,
      pregnancy: data[19].reponse == OUI,
      immuneSystemDisease: data[20].reponse == OUI,
      immunosuppressiveTherapy: data[21].reponse == OUI,
    };
  
    const factGravMin = getFactGravMin(symptoms);
    const factGravMaj = getFactGravMaj(symptoms);
    const hasfFactProno = getPronoFact(poorPronoFact);
  
    if (
      symptoms.fever ||
      (symptoms.cough && symptoms.soreThroat) ||
      (symptoms.cough && symptoms.muscularPain) ||
      (symptoms.fever && symptoms.diarrhea)
    ) {
      if (factGravMaj > 0) {
        return 'خصك تعيط ل 141';
      } else if (!hasfFactProno) {
        if (poorPronoFact.age < 50 && factGravMin === 0) {
          return 'تنوصيوك باش تبقى فدارك و تتصل بطبيبك إذا بانت شي أعراض أخرى . وتقد فاي وقت تعاود الإختبار باش طمن على راسك';
        }
        if (
          (poorPronoFact.age > 50 &&
            poorPronoFact.age < 70 &&
            factGravMin === 0) ||
          factGravMin > 0
        ) {
          return (
            'تقد تشاور مع طبيب فالتيليفون او يزورك طبيب فالدار' +
            '\nإذا كان عندك صعوبة فالتنفس او مقديتيش تاكل مزيان او تشرب لكثر من 24 ساعة ضروري اتصل ب 141'
          );
        }
      } else {
        if (factGravMin <= 1) {
          return (
            'تقد تشاور مع طبيب فالتيليفون او يزورك طبيب فالدار' +
            '\nإذا كان عندك صعوبة فالتنفس او مقديتيش تاكل مزيان او تشرب لكثر من 24 ساعة ضروري اتصل ب 141'
          );
        } else {
          return 'خصك تعيط ل 141';
        }
      }
    } else if (symptoms.fever && symptoms.cough) {
      if (factGravMaj > 0) {
        return 'خصك تعيط ل 141';
      } else if (!hasfFactProno) {
        return (
          'تقد تشاور مع طبيب فالتيليفون او يزورك طبيب فالدار' +
          '\nإذا كان عندك صعوبة فالتنفس او مقديتيش تاكل مزيان او تشرب لكثر من 24 ساعة ضروري اتصل ب 141'
        );
      } else {
        if (factGravMin <= 1) {
          return (
            'تقد تشاور مع طبيب فالتيليفون او يزورك طبيب فالدار' +
            '\nإذا كان عندك صعوبة فالتنفس او مقديتيش تاكل مزيان او تشرب لكثر من 24 ساعة ضروري اتصل ب 141'
          );
        } else {
          return 'خصك تعيط ل 141';
        }
      }
    } else if (
      symptoms.fever ||
      symptoms.cough ||
      symptoms.soreThroat ||
      symptoms.muscularPain
    ) {
      if (factGravMaj === 0 && factGravMin === 0) {
        return 'موحال واش فيك فيروس كورونا، ولكن إلى شكيتي ممكن تتصل بطبيب ديالك';
      } else if (factGravMin > 0 || factGravMaj > 0 || hasfFactProno) {
        return 'موحال واش فيك فيروس كورونا ؛ تنصحوك تشاور مع طبيب. وإلى شكيتي اتصل ب 141';
      }
    } else {
      return 'موحال واش فيك فيروس كورونا، إذا عندك شك اتصل بالطبيب ديالك. تقد تعاود الإختبار لكانوا عندك اعراض اخرى. لبغيتي تعرف اكثر على الڤيروس ممكن تشوف صفحة النصائح';
    }
  };