class ValidForm {
    constructor() {
        this.form = document.querySelector('.formulario');
        this.event();
    }
    event() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const inputValid = this.validInput();

        if (inputValid) {
            alert('Mensagem enviada.');
            this.form.submit();
        }
    }

    validInput() {
        let valid = true;

        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove()
          }

        for (let valids of this.form.querySelectorAll('.valid')) {
            const label = valids.previousElementSibling.innerText;

            if (!valids.value) {
                this.criaErro(valids, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }
        }
        return valid;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
    
}

const valida = new ValidForm();