import { Events } from './EventBus';

export class PopupAuth
{
    constructor() {
        this.buildHtml();
        this.assignEvents();

        this.show();
    }

    buildHtml() {
        let modal = $('<div />', {class: "modal popupAuth fade", tabIndex: "-1", role: "dialog", "data-backdrop": "static", "data-keyboard": false });
        let modalDialog = $('<div />', { class: "modal-dialog", role: "document" });
        let modalContent = $('<div />', { class: "modal-content" });
        let modalHeader = $('<div />', { class: "modal-header", html: '<h4 class="modal-title">Please login again to continue</h4>' });
        let modalBody = $('<div />', { class: "modal-body", html: this.getBody() });
        let modalFooter = $('<div />', { class: "modal-footer", html: '<button type="button" class="btn btn-default">Cancel</button><button type="button" class="btn btn-primary">Login</button>' });

        modalContent.append(modalHeader).append(modalBody).append(modalFooter);
        modalDialog.append(modalContent);
        modal.append(modalDialog);
        
        this.modal = modal;
        this.modalBody = modalBody;
        this.modalFooter = modalFooter;
    }

    getBody() {
        return `
            <form>
                <div class="input-group" style="margin-bottom: 10px;">
                    <span class="input-group-addon" style="min-width: 104px;" id="popupAuth-username">Email: </span>
                    <input type="text" name="username" class="form-control" placeholder="Username" aria-describedby="popupAuth-username">
                </div>
                <div class="input-group">
                    <span class="input-group-addon" style="min-width: 104px;" id="popupAuth-password">Password: </span>
                    <input type="text" name="password" class="form-control" placeholder="Password" aria-describedby="popupAuth-password">
                </div>
            </form> 
        `;
    }

    assignEvents() {
        this.modalFooter.find('.btn-default').on('click', function(){
            Events.$emit('popupAuth.cancel', this);
        }.bind(this));

        this.modalFooter.find('.btn-primary').on('click', function(){
            Events.$emit('popupAuth.login', this.modalBody.find("form").serializeArray());
        }.bind(this));
    }

    show() {
        this.modal.modal("show");
        $('body').addClass("popupAuth-open");
    }

    hide() {
        this.modal.modal("hide");
        $('body').removeClass("popupAuth-open");
    }
}