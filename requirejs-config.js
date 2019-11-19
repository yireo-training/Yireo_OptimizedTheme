var config = {
    map: {
        '*': {
            'Magento_Ui/js/lib/knockout/bindings/bootstrap': 'js/knockout-bootstrap'
        }
    },
    paths: {
        'mage/calendar': 'js/zero',
        'jquery/patches/jquery': 'js/zero',

    },
    config: {
        mixins: {
            jquery: {
                'jquery/patches/jquery': false
            }
        }
    },
    skipDataMain: true
};

require(['jquery'], function($) {
    $.migrateMute = true;
});