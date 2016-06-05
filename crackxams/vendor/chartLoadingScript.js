/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



                            // SMALL DOUGHNUT :(

                            var smallDoughnutData = [
                                {value: 80, color: "#d9c54a"},
                                {value: 100 - 80, color: "#dce0df"}
                            ];

                            $("#mocksDoughnut").doughnutit({
                                dnData: smallDoughnutData,
                                dnSize: 130,
                                dnInnerCutout: 60,
                                dnAnimation: true,
                                dnAnimationSteps: 60,
                                dnAnimationEasing: 'linear',
                                dnStroke: false,
                                dnShowText: true,
                                dnFontSize: '15px',
                                dnFontOffset: 20,
                                dnFontColor: "#819596",
                                dnText: 'Mocks',
                                dnStartAngle: 90,
                                dnCounterClockwise: false,
                                dnRightCanvas: {
                                    rcRadius: 5,
                                    rcPreMargin: 20,
                                    rcMargin: 20,
                                    rcHeight: 40,
                                    rcOffset: 5,
                                    rcLineWidth: 85,
                                    rcSphereColor: '#819596',
                                    rcSphereStroke: '#819596',
                                    rcTop: {
                                        rcTopLineColor: '#819596',
                                        rcTopDashLine: 0,
                                        rcTopFontSize: '13px',
                                        rcStrokeWidth: 1,
                                        rcTopPreMargin: 20,
                                        rcTopMargin: 20,
                                        rcTopHeight: 40,
                                        rcTopLineWidth: 85,
                                        rctAbove: {
                                            rctText: 'MÉDIA',
                                            rctOffset: 2,
                                            rctImageOffsetRight: 5,
                                            rctImageOffsetBottom: 0,
                                            // rctImage: 'img/calendar.png',
                                        },
                                        rctBelow: {
                                            rctText: '6.5',
                                            rctFontSize: '35px',
                                            rctFontStyle: 'bold',
                                            rctOffset: 2,
                                            rctImageOffsetRight: 5,
                                            rctImageOffsetBottom: 0,
                                            // rctImage: 'img/calendar.png'
                                        }
                                    },
                                    rcBottom: {
                                        rcBottomDashLine: 0,
                                        rcBottomFontSize: '15px',
                                        rcBottomLineColor: '#819596',
                                        rcStrokeWidth: 1,
                                        rcBottomPreMargin: 20,
                                        rcBottomMargin: 20,
                                        rcBottomHeight: 30,
                                        rcBottomLineWidth: 85,
                                        rcbAbove: {
                                            // rcbImage: 'img/calendar.png',
                                            rcbImageOffsetBottom: 0,
                                            rcbImageOffsetRight: 5,
                                            rcbText: 'DATA DE G3',
                                            rcbFontSize: '13px',
                                            rcbOffset: 2
                                        },
                                        rcbBelow: {
                                            rcbImage: 'img/calendar.png',
                                            rcbImageOffsetRight: 5,
                                            rcbImageOffsetBottom: 0,
                                            rcbText: new Date().getDate() + "/" + new Date().getMonth()+1 + "/" + new Date().getFullYear(),
                                            rcbOffset: 5
                                        }
                                    }
                                }
                            });// End Doughnut



                            // SMALL DOUGHNUT :(

                            var smallDoughnutData2 = [
                                {value: 45, color: "#00C03F"},
                                {value: 100 - 45, color: "#dce0df"}
                            ];

                            $("#topicsDoughnut").doughnutit({
                                dnData: smallDoughnutData2,
                                dnSize: 130,
                                dnInnerCutout: 60,
                                dnAnimation: true,
                                dnAnimationSteps: 60,
                                dnAnimationEasing: 'linear',
                                dnStroke: false,
                                dnShowText: true,
                                dnFontSize: '15px',
                                dnFontOffset: 20,
                                dnFontColor: "#819596",
                                dnText: 'Topics',
                                dnStartAngle: 90,
                                dnCounterClockwise: false,
                                dnRightCanvas: {
                                    rcRadius: 5,
                                    rcPreMargin: 20,
                                    rcMargin: 20,
                                    rcHeight: 40,
                                    rcOffset: 5,
                                    rcLineWidth: 85,
                                    rcSphereColor: '#819596',
                                    rcSphereStroke: '#819596',
                                    rcTop: {
                                        rcTopLineColor: '#819596',
                                        rcTopDashLine: 0,
                                        rcTopFontSize: '13px',
                                        rcStrokeWidth: 1,
                                        rcTopPreMargin: 20,
                                        rcTopMargin: 20,
                                        rcTopHeight: 40,
                                        rcTopLineWidth: 85,
                                        rctAbove: {
                                            rctText: 'MÉDIA',
                                            rctOffset: 2,
                                            rctImageOffsetRight: 5,
                                            rctImageOffsetBottom: 0,
                                            // rctImage: 'img/calendar.png',
                                        },
                                        rctBelow: {
                                            rctText: '6.5',
                                            rctFontSize: '35px',
                                            rctFontStyle: 'bold',
                                            rctOffset: 2,
                                            rctImageOffsetRight: 5,
                                            rctImageOffsetBottom: 0,
                                            // rctImage: 'img/calendar.png'
                                        }
                                    },
                                    rcBottom: {
                                        rcBottomDashLine: 0,
                                        rcBottomFontSize: '15px',
                                        rcBottomLineColor: '#819596',
                                        rcStrokeWidth: 1,
                                        rcBottomPreMargin: 20,
                                        rcBottomMargin: 20,
                                        rcBottomHeight: 30,
                                        rcBottomLineWidth: 85,
                                        rcbAbove: {
                                            // rcbImage: 'img/calendar.png',
                                            rcbImageOffsetBottom: 0,
                                            rcbImageOffsetRight: 5,
                                            rcbText: 'DATA DE G3',
                                            rcbFontSize: '13px',
                                            rcbOffset: 2
                                        },
                                        rcbBelow: {
                                            rcbImage: 'img/calendar.png',
                                            rcbImageOffsetRight: 5,
                                            rcbImageOffsetBottom: 0,
                                            rcbText: new Date().getDate() + "/" + new Date().getMonth()+1 + "/" + new Date().getFullYear(),
                                            rcbOffset: 5
                                        }
                                    }
                                }
                            });// End Doughnut



                            // SMALL DOUGHNUT :(

                            var smallDoughnutData3 = [
                                {value: 20, color: "#38668E"},
                                {value: 100 - 20, color: "#dce0df"}
                            ];

                            $("#examsDoughnut").doughnutit({
                                dnData: smallDoughnutData3,
                                dnSize: 130,
                                dnInnerCutout: 60,
                                dnAnimation: true,
                                dnAnimationSteps: 60,
                                dnAnimationEasing: 'linear',
                                dnStroke: false,
                                dnShowText: true,
                                dnFontSize: '15px',
                                dnFontOffset: 20,
                                dnFontColor: "#38668E",
                                dnText: 'Exams',
                                dnStartAngle: 90,
                                dnCounterClockwise: false,
                                dnRightCanvas: {
                                    rcRadius: 5,
                                    rcPreMargin: 20,
                                    rcMargin: 20,
                                    rcHeight: 40,
                                    rcOffset: 5,
                                    rcLineWidth: 85,
                                    rcSphereColor: '#38668E',
                                    rcSphereStroke: '#38668E',
                                    rcTop: {
                                        rcTopLineColor: '#38668E',
                                        rcTopDashLine: 0,
                                        rcTopFontSize: '13px',
                                        rcStrokeWidth: 1,
                                        rcTopPreMargin: 20,
                                        rcTopMargin: 20,
                                        rcTopHeight: 40,
                                        rcTopLineWidth: 85,
                                        rctAbove: {
                                            rctText: 'MÉDIA',
                                            rctOffset: 2,
                                            rctImageOffsetRight: 5,
                                            rctImageOffsetBottom: 0,
                                            // rctImage: 'img/calendar.png',
                                        },
                                        rctBelow: {
                                            rctText: '7.8',
                                            rctFontSize: '35px',
                                            rctFontStyle: 'bold',
                                            rctOffset: 2,
                                            rctImageOffsetRight: 5,
                                            rctImageOffsetBottom: 0,
                                            // rctImage: 'img/calendar.png'
                                        }
                                    },
                                    rcBottom: {
                                        rcBottomDashLine: 0,
                                        rcBottomFontSize: '15px',
                                        rcBottomLineColor: '#38668E',
                                        rcStrokeWidth: 1,
                                        rcBottomPreMargin: 20,
                                        rcBottomMargin: 20,
                                        rcBottomHeight: 30,
                                        rcBottomLineWidth: 85,
                                        rcbAbove: {
                                            // rcbImage: 'img/calendar.png',
                                            rcbImageOffsetBottom: 0,
                                            rcbImageOffsetRight: 5,
                                            rcbText: 'DATA DE G3',
                                            rcbFontSize: '13px',
                                            rcbOffset: 2
                                        },
                                        rcbBelow: {
                                            rcbImage: 'img/calendar.png',
                                            rcbImageOffsetRight: 5,
                                            rcbImageOffsetBottom: 0,
                                            rcbText: new Date().getDate() + "/" + new Date().getMonth()+1 + "/" + new Date().getFullYear(),
                                            rcbOffset: 5
                                        }
                                    }
                                }
                            });// End Doughnut




