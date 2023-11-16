const homeData = `{ 
    "sections": [
        {
            "id": "NavSection",
            "sectionType": "NavSection",
            "paddingTop": 0,
            "paddingBottom": 0,
            "paddingLeft": 0,
            "paddingRight": 0,
            "marginTop": 20,
            "marginBottom": 0,
            "marginLeft": 20,
            "marginRight": 20,
            "navItems": [
                {
                    "id": "Menu",
                    "type": "Menu",
                    "icon": "https://drive.google.com/file/d/1WP8q4s5LWVZnVxNp-LR95LpcuiRNn5eH/view?usp=sharing",
                    "iconSizeInDp": 0.0,
                    "iconColor": "#181818",
                    "iconVerticalPosition": "center",
                    "iconHorizontalPosition": "start",
                    "action": {
                        "actionType": "open_screen",
                        "screenType": "menu"
                    }
                },
                {
                    "id": "Notification",
                    "type": "Notification",
                    "icon": "https://drive.google.com/file/d/1WP8q4s5LWVZnVxNp-LR95LpcuiRNn5eH/view?usp=sharing",
                    "iconSizeInDp": 22.0,
                    "iconColor": "#181818",
                    "iconVerticalPosition": "top",
                    "iconHorizontalPosition": "end",
                    "action": {
                        "actionType": "open_screen",
                        "screenType": "notification"
                    }
                }
            ]
        },
        {
            "id": "UserInfoSection",
            "sectionType": "UserInfoSection",
            "paddingTop": 0,
            "paddingBottom": 0,
            "paddingLeft": 0,
            "paddingRight": 0,
            "marginTop": 25,
            "marginBottom": 0,
            "marginLeft": 20,
            "marginRight": 20,
            "elements": [
                {
                    "id": "Typography",
                    "sectionType": "Typography",
                    "headerText": "Hi!! Diya...",
                    "headerTextSize": 26,
                    "headerTextStyle": "bold",
                    "verticalPosition": "top",
                    "horizontalPosition": "start",
                    "headerFont": "",
                    "textColor": "#181818"
                },
                {
                    "id": "UserProfileImage",
                    "sectionType": "UserProfileImage",
                    "url": "https://images.unsplash.com/photo-1508356668755-c733d269226d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MzY1NDA2NA&ixlib=rb-4.0.3&q=80&w=1080",
                    "shape": "circle",
                    "sizeInDp": 67.0,
                    "cornerRadius": 0,
                    "verticalPosition": "center",
                    "horizontalPosition": "end",
                    "action": {
                        "actionType": "open_screen",
                        "screenType": "profile"
                    }
                }
            ]
        },
        {
            "id": "HeaderSection",
            "sectionType": "HeaderSection",
            "paddingTop": 0,
            "paddingBottom": 0,
            "paddingLeft": 0,
            "paddingRight": 0,
            "marginTop": 5,
            "marginBottom": 0,
            "marginLeft": 20,
            "marginRight": 20,
            "element": {
                "id": "Typography",
                "sectionType": "Typography",
                "headerText": "Quote of the Day",
                "headerTextSize": 14.5,
                "headerTextStyle": "bold",
                "verticalPosition": "top",
                "horizontalPosition": "start",
                "headerFont": "",
                "textColor": "#181818"
            }
        },
        {
            "id": "QouteCarousalSection",
            "sectionType": "QouteCarousalSection",
            "paddingTop": 0,
            "paddingBottom": 0,
            "paddingLeft": 0,
            "paddingRight": 0,
            "marginTop": 8,
            "marginBottom": 0,
            "marginLeft": 0,
            "marginRight": 0,
            "imageCornerRadius": 40,
            "imageHeight": 170,
            "images": [
                "https://img.freepik.com/premium-photo/landscape-background-with-inspirational-quotes-never-give-up-great-things-take-time-generative-ai_698447-2136.jpg",
                "https://img.freepik.com/free-photo/never-stop-learning-quote-hand-holding-flower_53876-94796.jpg?w=1060&t=st=1698580447~exp=1698581047~hmac=bb6295cbcf87ae2e1354b43e7899e1883c0eb4c618f2572dcc4c6e073e583dbf",
                "https://img.freepik.com/premium-vector/hand-drawn-abstract-colorful-memphis-background_615876-196.jpg?w=1060"
            ]
        },
        {
            "id": "UserProgressSection",
            "sectionType": "UserProgressSection",
            "paddingTop": 0,
            "paddingBottom": 0,
            "paddingLeft": 0,
            "paddingRight": 0,
            "marginTop": 20,
            "marginBottom": 0,
            "marginLeft": 20,
            "marginRight": 20,
            "progressTypographyProperties": {
                "id": "Typography",
                "sectionType": "Typography",
                "headerText": "UserName",
                "headerTextSize": 13,
                "headerTextStyle": "normal",
                "verticalPosition": "top",
                "horizontalPosition": "start",
                "headerFont": "",
                "textColor": "#9D9C9C"
            },
            "progressType": "PotWave",
            "isAnimationOn": true,
            "animationSpeed": 50,
            "shouldShowProgressPercentage": true,
            "progressPrimaryColor": "#DD5001",
            "progressSecondaryColor": "#FF9865",
            "progressBackgroundColor": "#FFCEC4",
            "progressSize": 150,
            "progressPercentageTypographyProperties": {
                "id": "Typography",
                "sectionType": "Typography",
                "headerText": "UserName",
                "headerTextSize": 15,
                "headerTextStyle": "bold",
                "verticalPosition": "top",
                "horizontalPosition": "start",
                "headerFont": "",
                "textColor": "#181818"
            },
            "habitProgressType": "CircularProgress",
            "habitPercentageTypographyProperties": {
                "id": "Typography",
                "sectionType": "Typography",
                "headerText": "UserName",
                "headerTextSize": 15,
                "headerTextStyle": "bold",
                "verticalPosition": "top",
                "horizontalPosition": "start",
                "headerFont": "",
                "textColor": "#181818"
            }
        },
        {
            "id": "HeaderSection",
            "sectionType": "HeaderSection",
            "paddingTop": 0,
            "paddingBottom": 0,
            "paddingLeft": 0,
            "paddingRight": 0,
            "marginTop": 50,
            "marginBottom": 0,
            "marginLeft": 20,
            "marginRight": 20,
            "element": {
                "id": "Typography",
                "sectionType": "Typography",
                "headerText": "More of What You Like",
                "headerTextSize": 16,
                "headerTextStyle": "bold",
                "verticalPosition": "top",
                "horizontalPosition": "start",
                "headerFont": "",
                "textColor": "#181818"
            }
        },
        {
            "id": "habit_corousal",
            "sectionType": "habit_corousal",
            "orientation": "horizontal",
            "paddingTop": 0,
            "paddingBottom": 0,
            "paddingLeft": 0,
            "paddingRight": 0,
            "marginTop": 0,
            "marginBottom": 50,
            "marginLeft": 30,
            "marginRight": 20,
            "imageCornerRadius": 50,
            "imageHeight": 200,
            "width": "280",
            "height": "300",
            "habitTitleProperties": {
                "id": "Typography",
                "sectionType": "Typography",
                "headerText": "Hi!! Diya...",
                "headerTextSize": 13,
                "headerTextStyle": "normal",
                "verticalPosition": "top",
                "horizontalPosition": "center",
                "headerFont": "",
                "textColor": "#181818"
            },
            "action": {
                "actionType": "open_screen",
                "screenType": "add_habit"
            },
            "habits": [
                {
                    "id": "habit",
                    "sectionType": "habit",
                    "habitName": "Jogging",
                    "habitThumbnail": "https://images.unsplash.com/photo-1692481130055-5508b8ba260d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MzU4MjAyMA&ixlib=rb-4.0.3&q=80&w=500"
                },
                {
                    "id": "habit",
                    "sectionType": "habit",
                    "habitName": "Morning Run",
                    "habitThumbnail": "https://images.unsplash.com/photo-1692481130055-5508b8ba260d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MzU4MjAyMA&ixlib=rb-4.0.3&q=80&w=500"
                },
                {
                    "id": "habit",
                    "sectionType": "habit",
                    "habitName": "Wake Up Earddfly",
                    "habitThumbnail": "https://images.unsplash.com/photo-1692481130055-5508b8ba260d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MzU4MjAyMA&ixlib=rb-4.0.3&q=80&w=500"
                },
                {
                    "id": "habit",
                    "sectionType": "habit",
                    "habitName": "Wake Up Edfvdfarly",
                    "habitThumbnail": "https://images.unsplash.com/photo-1692481130055-5508b8ba260d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MzU4MjAyMA&ixlib=rb-4.0.3&q=80&w=500"
                },
                {
                    "id": "habit",
                    "sectionType": "habit",
                    "habitName": "Wake Up Edfvdfarly",
                    "habitThumbnail": "https://images.unsplash.com/photo-1692481130055-5508b8ba260d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MzU4MjAyMA&ixlib=rb-4.0.3&q=80&w=500"
                },
                {
                    "id": "habit",
                    "sectionType": "habit",
                    "habitName": "Wake Up dfvfdv",
                    "habitThumbnail": "https://images.unsplash.com/photo-1692481130055-5508b8ba260d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MzU4MjAyMA&ixlib=rb-4.0.3&q=80&w=500"
                },
                {
                    "id": "habit",
                    "sectionType": "habit",
                    "habitName": "Wake fdvfdv Early",
                    "habitThumbnail": "https://images.unsplash.com/photo-1692481130055-5508b8ba260d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MzU4MjAyMA&ixlib=rb-4.0.3&q=80&w=500"
                }
            ]
        }
    ]
}`

module.exports = homeData