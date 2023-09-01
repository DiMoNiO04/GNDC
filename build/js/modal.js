class Modal {
    constructor(name) {
        this.name = name;
        this.modal = document.querySelector(`[data-modal="${name}"]`);
        this.triggers = document.querySelectorAll(`[data-modal-class="${name}"]`);
        this.body = document.querySelector(`body`);
        this.openHendler();
    }
    open() {
        this.modal.classList.remove('success', 'error');
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.modal.addEventListener('click', this.closeHendler);
    }
    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = 'unset';
        this.modal.removeEventListener('click', this.closeHendler);
    }
    success() {
        this.modal.classList.remove('error');
        this.modal.classList.add('success');
    }
    error() {
        this.modal.classList.remove('success');
        this.modal.classList.add('error');
    }
    update() {
        this.modal = document.querySelector(`[data-modal="${this.name}"]`);
        this.triggers = document.querySelectorAll(`[data-modal-class="${this.name}"]`);
        this.openHendler();
    }
    openHendler = (e) => {
        this.triggers.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.open();
            });
        });
    };
    closeHendler = (e) => {
        if (e.target.classList.contains('close-x')) {
            this.close();
        }
    };
}

let conferences = document.querySelector('[data-modal="conferences"]') ? new Modal('conferences') : null;
