node "!DOCTYPE" [ attribute "html" "" ]
    [ node "html" []
        [ node "head" []
            [ node "meta" [ charset "UTF-8" ]
                []
            , node "meta" [ content "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'", attribute "http-equiv" "Content-Security-Policy" ]
                []
            , node "link" [ href "./css/index.css", rel "stylesheet" ]
                []
            , node "title" []
                [ text "Chat App" ]
            ]
        , body []
            [ div [ class "login-page" ]
                [ div [ class "form" ]
                    [ div [ class "login" ]
                        [ div [ class "login-header" ]
                            [ h3 []
                                [ text "LOGIN" ]
                            , p []
                                [ text "Please enter your credentials to login." ]
                            ]
                        ]
                    , form [ class "login-form" ]
                        [ input [ placeholder "username", type_ "text" ]
                            []
                        , text "        "
                        , input [ placeholder "password", type_ "password" ]
                            []
                        , button [ id "login-btn", attribute "onclick" "loginHandler()", type_ "button" ]
                            [ text "login        " ]
                        ]
                    ]
                ]
            , node "script" [ src "../src/renderer.js" ]
                []
            , node "script" [ src "./js/index.js" ]
                []
            ]
        ]
    ]