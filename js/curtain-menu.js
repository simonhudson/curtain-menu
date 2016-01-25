var CurtainMenu = {
    
    Obj: {},

    openClass: 'is-open',

    init: function() {
        CurtainMenu.Obj.toggle = $('.js-menu-toggle');
        CurtainMenu.Obj.level1 = $('.js-curtain--level-1');
        CurtainMenu.Obj.level2 = $('.js-curtain--level-2');
        CurtainMenu.Obj.links = $('.level-1__link');
        $('.curtain').height($(document).height());
        CurtainMenu.eventListeners();
    },

    eventListeners: function() {
        CurtainMenu.Obj.toggle.on('click', function() {
            CurtainMenu.toggleLevel1();
        });

        CurtainMenu.Obj.links.each(function() {
            $(this).on('click', function() {
                CurtainMenu.toggleLevel2($(this));
                return false;
            });
        });
    },

    toggleLevel1: function() {
        CurtainMenu.Obj.level2.removeClass(CurtainMenu.openClass);
        if (CurtainMenu.Obj.level1.hasClass(CurtainMenu.openClass))
            CurtainMenu.Obj.level1.removeClass(CurtainMenu.openClass);
        else
            CurtainMenu.Obj.level1.addClass(CurtainMenu.openClass);
    },

    toggleLevel2: function(element) {
        CurtainMenu.Obj.level2.removeClass(CurtainMenu.openClass);
        var target = $('[data-level-2="' + element.attr('data-level-2-target') + '"]');
        if (target.hasClass(CurtainMenu.openClass))
            target.removeClass(CurtainMenu.openClass);
        else
            target.addClass(CurtainMenu.openClass);
    }


};
$(document).ready(CurtainMenu.init());