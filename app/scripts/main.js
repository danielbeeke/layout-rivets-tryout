$( document ).ready(function() {
    var rivetsData = {
        layout: {
            sidebar: {
                collapsed: true
            },
            panel: {
                left: {
                    expanded: false,
                    collapsed: true
                },
                right: {
                    expanded: true,
                    collapsed: false
                }
            }
        }
    };

    rivets.bind($('#layout-container'), rivetsData);

    setTimeout(function () {
        rivetsData.layout = {
            sidebar: {
                collapsed: false
            },
            panel: {
                left: {
                    expanded: true,
                    collapsed: false
                },
                right: {
                    expanded: false,
                    collapsed: true
                }
            }
        };
    }, 2000)

});

