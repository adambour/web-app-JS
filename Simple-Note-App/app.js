document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.querySelector('input[type="text"]');
    const addNoteBtn = document.querySelector('.btn1');
    const deleteNoteBtn = document.querySelector('.btn2');
    const colors = document.querySelectorAll('.colors button');

    let notes = [];

    addNoteBtn.addEventListener('click', function () {
        const inputValue = inputField.value.trim(); 
        if (inputValue !== '') {
            const selectedColor = document.querySelector('.colors .selected');
            const color = selectedColor ? selectedColor.className.split(' ')[0] : '';
            const note = {
                text: inputValue,
                color: color,
                width: "200px", 
                height: "100px", 

            };
            notes.push(note);
            renderNotes();
            inputField.value = '';
        }
    });

    deleteNoteBtn.addEventListener('click', function () {
        notes = [];
        renderNotes();
    });

    colors.forEach(color => {
        color.addEventListener('click', function () {
            colors.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    function renderNotes() {
        const notesContainer = document.querySelector('.notes-container');
        if (notesContainer) {
            notesContainer.remove();
        }

        const newNotesContainer = document.createElement('div');
        newNotesContainer.classList.add('notes-container');

        notes.forEach((note, index) => {
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');
            noteElement.style.backgroundColor = note.color;
            noteElement.style.width = note.width;
            noteElement.style.height = note.height;
            noteElement.textContent = note.text;
            noteElement.addEventListener('click', function () {
                deleteNote(index);
            });
            newNotesContainer.appendChild(noteElement);
        });

        document.body.appendChild(newNotesContainer);
    }

    function deleteNote(index) {
        notes.splice(index, 1);
        renderNotes();
    }
});