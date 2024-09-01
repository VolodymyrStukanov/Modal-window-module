# Modal window mudule

## Features

There a few features of the module:
1) Ability to create multiple modal windows using unique ids for each component;
2) Ability of displaying any content by passing content as a component as a parameter into the methods of the ModalWindowController class;
3) Ability to pass custom OnClose method to ModalWindow components through the ModalWindowController class;

## Usage of the module

The first you have to do to use the module is inserting a ModalWindow component into the code and passing an unique id as the parameter to the component. if you are not going to use multiple window, passing an unique id isn`t necessary. The next is creating content for the modul window. For example, it could be a dialog window or even a full page which are alredy created or used in a project. Then, you have to call one of the ModalWindowController class methods, that's showModal and showRenderableModal methods, and pass to it the content as the page argument and the ModalWindow id as the modalId argument. Also, you can pass custom parameters such as styles, onClose and timer.
