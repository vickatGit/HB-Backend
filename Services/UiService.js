const GetUi = () => {
    return {
        sections : [
            {
                id:'NavSection',
                sectionType:'NavSection',
                paddingTop:0,
                paddingBottom:0,
                paddingLeft:0,
                paddingRight:0,
                marginTop:0,
                marginBottom:0,
                marginLeft:0,
                marginRight:0,
                navItems : [
                    {
                        id:'Menu',
                        type:'Menu',
                        icon : 'https://drive.google.com/file/d/1WP8q4s5LWVZnVxNp-LR95LpcuiRNn5eH/view?usp=sharing',
                        iconSizeInDp : 30.0,
                        iconColor:'#181818',
                        iconVerticalPosition:'center',
                        iconHorizontalPosition : 'start',
                        action:null
                    },
                    {
                        id:'Notification',
                        type:'Notification',
                        icon : 'https://drive.google.com/file/d/1WP8q4s5LWVZnVxNp-LR95LpcuiRNn5eH/view?usp=sharing',
                        iconSizeInDp : 30.0,
                        iconColor:'#181818',
                        iconVerticalPosition:'center',
                        iconHorizontalPosition : 'end',
                        action:{
                            actionType:'open_screen',
                            resId:null,
                            screenType:'notification_screen'
                        }
                    }
                ]

            },
            {
                id:'UserInfoSection',
                sectionType:'UserInfoSection',
                paddingTop:0,
                paddingBottom:0,
                paddingLeft:0,
                paddingRight:0,
                marginTop:0,
                marginBottom:0,
                marginLeft:0,
                marginRight:0,
                elements:[
                    {
                        id:'Typography',
                        sectionType:'Typography',
                        headerText:'UserName',
                        headerTextSize:20,
                        headerTextStyle:'bold',
                        verticalPosition:'top',
                        horizontalPosition:'start',
                        headerFont:''
                    },
                    {
                        id:'UserProfileImage',
                        sectionType:'UserProfileImage',
                        url:'String',
                        shape:'circle',
                        sizeInDp:50.0,
                        verticalPosition:'center',
                        horizontalPosition:'end',
                    }
                ]
            },
            {
                id:'HeaderSection',
                sectionType:'HeaderSection',
                paddingTop:0,
                paddingBottom:0,
                paddingLeft:0,
                paddingRight:0,
                marginTop:0,
                marginBottom:0,
                marginLeft:0,
                marginRight:0,
                element:{
                    id:'Typography',
                    sectionType:'Typography',
                    headerText:'UserName',
                    headerTextSize:20,
                    headerTextStyle:'bold',
                    verticalPosition:'top',
                    horizontalPosition:'start',
                    headerFont:''
                }
            },
            {
                id:'QouteCarousalSection',
                sectionType:'QouteCarousalSection',
                paddingTop:0,
                paddingBottom:0,
                paddingLeft:0,
                paddingRight:0,
                marginTop:0,
                marginBottom:0,
                marginLeft:0,
                marginRight:0,
                imageCornerRadius:0,
                images:[
                    "https://images.unsplash.com/photo-1692481130055-5508b8ba260d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MzU4MjAyMA&ixlib=rb-4.0.3&q=80&w=500"
                ]
            },
            {
                id:'UserProgressSection',
                sectionType:'UserProgressSection',
                paddingTop:0,
                paddingBottom:0,
                paddingLeft:0,
                paddingRight:0,
                marginTop:0,
                marginBottom:0,
                marginLeft:0,
                marginRight:0,
                progressTypographyProperties:{
                    id:'Typography',
                    sectionType:'Typography',
                    // headerText:'UserName',
                    headerTextSize:20,
                    headerTextStyle:'bold',
                    verticalPosition:'top',
                    horizontalPosition:'start',
                    headerFont:'',
                    textColor:'#181818',
                },
                progressType:"PotWave",
                isAnimationOn:true,
                animationSpeed:100,
                shouldShowProgressPercentage:true,
                progressPrimaryColor:"#181818",
                progressSecondaryColor:"#181818",
                progressPercentageTypographyProperties:{
                    id:'Typography',
                    sectionType:'Typography',
                    // headerText:'UserName',
                    headerTextSize:20,
                    headerTextStyle:'bold',
                    verticalPosition:'top',
                    horizontalPosition:'start',
                    headerFont:'',
                    textColor:'#181818',
                },  
                habitProgressType:'CircularProgress',
                habitPercentageTypographyProperties:{
                    id:'Typography',
                    sectionType:'Typography',
                    // headerText:'UserName',
                    headerTextSize:20,
                    headerTextStyle:'bold',
                    verticalPosition:'top',
                    horizontalPosition:'start',
                    headerFont:'',
                    textColor:'#181818',
                }

            }
        ]
    }
}
module.exports = GetUi