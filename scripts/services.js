var aboutlist =[{
                category : 'Corporate Events',
                detail : 'Corporate events are a bit different and involve professionalism and prudence, Delhi/NCR is amongst the major destination for corporate events since, it is the hub of popular brands and corporate offices nevertheless, corporate events need proper coordination between venue and services besides this they need to be served with accuracy.',
                image : 'images/corporateevents.png'
            },
            {
                category : 'Wedding Events',
                detail : 'We believe wedding planning should be easy, stress-free, and fun. We want you to have the perfect wedding. Whatever you are planning a lavish wedding or a small and intimate affair, we vow to provide you with all the resources and support you need to plan your dream wedding.',
                image : 'images/weddingevents.png'
            },
            {
                category : 'Birthday Events',
                detail : 'Planning for make a B’day Party starts to prior to a week and the event organizer have special role in the event. As the life is too busy in Metro city, the trend of an event organizer companies are on the peek. We keep our burden on the shoulders of the organizer and make our daily routine work without any hassle.',
                image : 'images/'
            },
            {
                category : 'Manpower',
                detail : 'We help you to manage the ever changing talent needs in today’s world of work in which rapid access to the right talent is a powerful competitive advantage. With our thorough understanding of staffing trends and our deep pool of highly qualified candidates, we can deliver the talent, matching the right individual to the right job.',
                image : 'images/manpower.png'

            },
            {
                category : 'Party Organisers',
                detail : 'Planning an event can mean endless to-do lists. Let us help you tie it all together by finding a terrific party planner to organize and execute all of the details!',
                image : 'images/partyorganisers.png'
            },
            {
                category : 'Fashion Shows',
                detail : 'Fashion shows are different to other events in several ways; they are fast-paced live productions that usually last no more than 18 minutes and there are many creative people (read egos) involved in the production which requires a delicate touch.',
                image : 'images/fashionshow.png'
            },
            {
                category : 'Promotional Activity',
                detail : 'Product and service promotion is the most common form of marketing. Promotional activities can include: advertising - you can advertise your product, service or brand in newspapers, radio, television, magazines, outdoor signage and online.',
                image : 'images/productlaunch.png'
            },
            {
                category : 'Road Shows',
                detail : 'We hold expertise in organizing road shows, that can reach out to a large number of audiences and get the product noticed. We organize road shows on behalf of corporate houses, personal brands and many more. And always make sure that the message conveyed to the target audience by our clients in the best possible manner.',
                image : 'images/roadshow.png'
            },
            {
                category : 'Stage Shows',
                detail : 'Stage management is the practice of organizing and coordinating a theatrical production. It encompasses a variety of activities, including organizing the production and coordinating communications between various personnel (e.g., between director and backstage crew, or actors and production management).',
                image : 'images/stageshow.png'
            },
            ];

var extraAboutList =[{
                category : 'Tours & Adventures',
                detail : 'Tourism is travel for pleasure; also the theory and practice of touring, the business of attracting, accommodating, and entertaining tourists, and the business of operating tours.',
                image : 'images/travel.png'
            },]
angular.module('villaEventsAndEntertainments')
        .service('indexFactory', function() {
            this.socialLinks = [{
                url : 'https://www.facebook.com/Vila-events-203813266626073/',
                image : 'images/facebook.png'
            },
            {
                url : '#',
                image : 'images/twitter.png'
            }
            ];  
            this.about =  [
                "Vila Events and Entertainments was established in 2012.",
                "We've built a reputation for creating and delivering inspirational events and executing them flawlessly first time round. We work really hard to achieve this and our success is down to the dynamics of a team who are down-to-earth, open-minded and consider what we do to be a lifestyle more than a career.",
                ];
            this.aboutlist = aboutlist;
            this.extraAboutList = extraAboutList;
            this.introductionCarousel = ['images/bg.png', 'images/wedding.png', 'images/corporate-party.png'];
            
            this.scrollTo = function(elementID) {            
                var startY = currentYPosition();
                var stopY = elmYPosition(elementID);
                var distance = stopY > startY ? stopY - startY : startY - stopY;
                if (distance < 100) {
                    scrollTo(0, stopY); return;
                }
                var speed = Math.round(distance / 100);
                if (speed >= 20) speed = 20;
                var step = Math.round(distance / 25);
                var leapY = stopY > startY ? startY + step : startY - step;
                var timer = 0;
                if (stopY > startY) {
                    for ( var i=startY; i<stopY; i+=step ) {
                        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                        leapY += step; if (leapY > stopY) leapY = stopY; timer++;
                    } return;
                }
                for ( var i=startY; i>stopY; i-=step ) {
                    setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                    leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
                }
                
                function currentYPosition() {
                    // Firefox, Chrome, Opera, Safari
                    if (self.pageYOffset) return self.pageYOffset;
                    // Internet Explorer 6 - standards mode
                    if (document.documentElement && document.documentElement.scrollTop)
                        return document.documentElement.scrollTop;
                    // Internet Explorer 6, 7 and 8
                    if (document.body.scrollTop) return document.body.scrollTop;
                    return 0;
                }
                
                function elmYPosition(elementID) {
                    var elm = document.getElementById(elementID);
                    var y = elm.offsetTop;
                    var node = elm;
                    while (node.offsetParent && node.offsetParent != document.body) {
                        node = node.offsetParent;
                        y += node.offsetTop;
                    } return y;
                }

            };
        })
        .service('galleryFactory', function() {
            this.pictures = {
                "Corporate Events" : [
                                    "1.jpg",
                                    "2.jpg",
                                    "3.jpg"
                                    ],
                "Promotional Activity" : [
                                        "1.jpg",
                                        "2.jpg",
                                        "3.jpg",
                                        "4.jpg"
                                        ]
            }
            ;
        });
