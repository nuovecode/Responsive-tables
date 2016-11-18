$(document).ready(function() {

    $('table').each(function(index){
        var table = $($('table')[index]);

        $(this).find('td').each(function(index){
            var title = $(table.find('th:nth-child(' + index + ')')).html(),
                $th = $(table.find('td:nth-child(' + index + ')'));

            if (title != undefined) {
                $th.prepend('<strong class="thead">' + title + '</strong>');
            }
        });
    });

});