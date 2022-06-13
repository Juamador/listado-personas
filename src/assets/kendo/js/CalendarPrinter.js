function getPDF(selector) {
	$(selector).addClass('pdf-page');
	
    kendo.drawing.drawDOM($(selector)).then(function(group) {
        kendo.drawing.pdf.saveAs(group, "Horario.pdf");
    });
	
	$(selector).removeClass('pdf-page');
}
