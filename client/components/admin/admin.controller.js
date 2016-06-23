export default class AdminController{

  static get UID() {
    return "AdminController"
  }

  /* @ngInject*/
  constructor($http) {
    this.list = [];
    this.editableField;
    this.options = [{
        value: 'One variant',
        type: 'radio'
      },
      {
        value: 'Multiply variants',
        type: 'checkbox'
      }/*,
      {
        value: 'Text',
        type: 'text'
      }*/
    ];

    let resetForm = () => {
      this.form = {
        type: this.typeAnswer.type,
        variants: [{
          value: '',
          isCorrect: false
        }]
      };
    };

    this.typeAnswer = this.options[0];

    resetForm();

    this.addQuestion =  event  => {
      this.list.push(this.form);
      resetForm();
      event.preventDefault();
    };

    this.editQuestion = index => {
      this.editableField = index;
      this.form = angular.copy(this.list[index]);
      this.typeAnswer = this.options.filter(item => item.type === this.list[index].type)[0];
    };

    this.saveQuestion =  index => {
      this.list[this.editableField] = this.form;
      resetForm();
      this.editableField = undefined;
    };

    this.deleteQuestion = index => {
      if (confirm('Do you really want to delete question?\n' + this.list[index].question)) {
        this.list.splice(index, 1);
      }
    };

    this.saveAll = () => {
      if (this.list.length && this.name) {
        $http
          .post('admin', {
            name: this.name,
            list: this.list
          })
          .then(data => {
            console.log(data);
          })
          .catch(error => console.error(error));
      }
    };

    this.addVariant = () => {
      this.form.variants.push({
        value: '',
        isCorrect: false
      });
    };

    this.removeVariant = index => {
      console.log(index, this.form.variants);
      this.form.variants.splice(index, 1);
    };

    this.markCorrect = variant => {
      if (this.form.type === 'radio') {
        this.form.variants.forEach(el => el.isCorrect = false);
      }

      variant.isCorrect = !variant.isCorrect;
    };

    this.selectType = () => {
      this.form.type = this.typeAnswer.type;
    };
    
    this.getTest = test => {
      $http.get('http://localhost:3000/admin/' + test)
        .then(data => {
          console.log(data)
        });
    };

    $http.get('http://localhost:3000/admin')
      .then(data => {
        this.tests = data.data || [];
      });
  }
}
