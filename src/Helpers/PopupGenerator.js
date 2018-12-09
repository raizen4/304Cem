

import Popup from 'react-popup';
function AuthPopup(){
     Popup.create({
        title: "Ops, You got an error",
        content: 'Please make sure you filled in both password and email fields and password before submitting the form ',
        buttons: {
            left: [{
                text: 'Cancel',
                className:"danger",
                action: function () {
                    Popup.alert('You pressed the Cancel btn');
    
                    /** Close this popup. Close will always close the current visible one, if one is visible */
                    Popup.close();
                }
            }],
            right: [{
                text: 'Alt',
                key: 'ctrl+enter',
                action: function () {
                    // Passing true as the second argument to the create method
                    // displays it directly, without interupting the queue.
                    Popup.create({
                        title: null,
                        content: 'I was configured to display right away, without affecting the queue. Closing this will display the previously visible popup.',
                        buttons: {
                            left: ['cancel'],
                            right: []
                        }
                    }, true);
                }
            }, {
                text: 'Save',
                className: 'success',
                action: function () {
                    Popup.alert('You pressed the Save btn');
    
                    /** Close this popup. Close will always close the current visible one, if one is visible */
                    Popup.close();
                }
            }]
        }
    })();
}
export default {AuthPopup}