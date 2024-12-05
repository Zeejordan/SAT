// import React, { useState } from 'react';
// import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { COLORS } from '../theme';

// const Infinite = () => {
//     const [levels, setLevels] = useState(Array.from({ length: 20 }, (_, i) => i + 1));

//     const loadMoreLevels = () => {
//         setLevels((prevLevels) => [
//             ...prevLevels,
//             ...Array.from({ length: 20 }, (_, i) => prevLevels.length + i + 1),
//         ]);
//     };

//     const renderItem = ({ item, index }) => {
//         const isEvenRow = Math.floor(index / 4) % 2 === 0; // Zig-zag row determination
//         const offset = (index % 4) * 80;

//         const positionStyles = {
//             marginLeft: isEvenRow ? offset : 240 - offset,
//             marginRight: isEvenRow ? 0 : offset,
//             marginTop: 10,
//         };

//         return (
//             <TouchableOpacity style={[styles.levelContainer, positionStyles]}>
//                 <Image
//                     source={require('../../assets/images/coin.png')}
//                     style={styles.coinImage}
//                 />
//                 <Text style={styles.levelText}>{item}</Text>
//             </TouchableOpacity>
//         );
//     };

//     return (
//         <SafeAreaView style={styles.mainContainer}>
//             <LinearGradient
//                 colors={[COLORS.linearGradientColor1, COLORS.linearGradientColor2]}
//                 style={styles.gradientContainer}
//                 start={{ x: 0.5, y: 0 }}
//                 end={{ x: 0.5, y: 1 }}
//             >
//                 <View style={styles.container}>
//                     <View style={styles.topContainer}>
//                         <View style={styles.semiTopContainer}>
//                             <Text style={styles.textAll}>⭐</Text>
//                             <Text style={styles.textAll}>3</Text>
//                         </View>
//                         <View style={styles.semiTopContainer}>
//                             <Text style={styles.textAll}>❤️</Text>
//                             <Text style={styles.textAll}>10</Text>
//                         </View>
//                         <View style={styles.semiTopContainer}>
//                             <Text style={styles.textAll}>🪙</Text>
//                             <Text style={styles.textAll}>1500</Text>
//                         </View>
//                     </View>

//                     <View style={styles.coinsContainer}>
//                         <FlatList
//                             data={levels}
//                             renderItem={renderItem}
//                             keyExtractor={(item) => item.toString()}
//                             onEndReached={loadMoreLevels}
//                             onEndReachedThreshold={0.5}
//                             contentContainerStyle={styles.listContent}
//                         />
//                     </View>
//                 </View>
//             </LinearGradient>
//         </SafeAreaView>
//     );
// };

// export default Infinite;

// const styles = StyleSheet.create({
//     mainContainer: {
//         flex: 1,
//     },
//     gradientContainer: {
//         flex: 1,
//     },
//     container: {
//         flex: 1,
//         marginHorizontal: wp('5%'),
//         marginTop: hp('1%'),
//     },
//     topContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         borderWidth: 1,
//         borderColor: 'transparent',
//     },
//     semiTopContainer: {
//         flexDirection: 'row',
//         gap: 5,
//     },
//     textAll: {
//         fontSize: hp('2.5%'),
//     },
//     levelContainer: {
//         alignItems: 'center',
//     },
//     coinImage: {
//         width: 80,
//         height: 80,
//     },
//     levelText: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: 'black',
//         fontFamily: 'Keania One',
//     },
//     coinsContainer: {
//         marginTop: hp('3%')
//     }
// });

//-----------------------------------------------------------------------------------------------------

import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../theme';

const Levels = () => {

    const data = Array.from({ length: 8 }, (_, index) => ({
        id: `${index + 1}`,
        label: `${index + 1}`,
    }));

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.coinContainer}>
            <Image source={require('../../assets/images/coin.png')} style={styles.coinImage} />
            <Text style={styles.coinText}>{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient
                colors={[COLORS.linearGradientColor1, COLORS.linearGradientColor2]}
                style={styles.gradientContainer}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            >
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <View style={styles.semiTopContainer}>
                            <Text style={styles.textAll}>⭐</Text>
                            <Text style={styles.textAll}>3</Text>
                        </View>
                        <View style={styles.semiTopContainer}>
                            <Text style={styles.textAll}>❤️</Text>
                            <Text style={styles.textAll}>10</Text>
                        </View>
                        <View style={styles.semiTopContainer}>
                            <Text style={styles.textAll}>🪙</Text>
                            <Text style={styles.textAll}>1500</Text>
                        </View>
                    </View>

                    <View style={styles.coinContainer}>
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.id}
                            renderItem={renderItem}
                            contentContainerStyle={styles.flatListContent}
                        />
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
};

export default Levels;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    gradientContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginHorizontal: wp('5%'),
        marginTop: hp('1%'),
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'transparent',
    },
    semiTopContainer: {
        flexDirection: 'row',
        gap: 5,
    },
    textAll: {
        fontSize: hp('2.5%'),
    },
    flatListContent: {
        paddingVertical: 20,
    },
    coinContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: hp('1%')
    },
    coinImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    coinText: {
        position: 'absolute',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },

});
