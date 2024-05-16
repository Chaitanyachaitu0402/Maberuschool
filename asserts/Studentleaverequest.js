
// import { useTheme, Card, Button, TextInput } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, Image, Dimensions, ScrollView, FlatList, SafeAreaView, Alert } from 'react-native';
// import Leavedetail from './Leavedetail';

// export default function Studentleaverequest({navigation}){
//     const { colors } = useTheme()
//     const horizontalview = [{ date: '11-01-2023, 09:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'Casual Leave', employe: 'id: 1224 ', name: 'Name: kotla.Ramadevi',class:'Class: V',section:'Section: A' }, { date: '13-01-2023, 11:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'Medical Leave', employe: 'id: 3334 ', name: 'Name: Varahi.Ravukumar',class:'Class: IX',section:'Section: B' }, { date: '16-03-2023, 11:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'Casual Leave', employe: 'id: 8769 ', name: 'Name: Deva.Prathiba',class:'Class: IV',section:'Section: A' },{ date: '16-03-2023, 11:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'Casual Leave', employe: 'id: 8769 ', name: 'Name: Deva.Prathiba',class:'Class: III',section:'Section: B' }]
//     const apperancce = (data) => {
//         console.log("data:", data);
//         return (
//             <Card style={{ width: '95%', alignSelf: 'center', backgroundColor: colors.primary, marginTop: 14, padding: 8 }}>

//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>
//                     <Text style={{ color: colors.text, fontSize: 17, fontWeight: 'bold', marginStart: 9, marginTop: 6 }}>{data.item.text}  </Text>
//                     <Icon name='eye' color={colors.text} size={24} style={{ marginTop: 10, alignSelf: 'flex-end' }}onPress={()=>navigation.navigate(Leavedetail)}> </Icon>

//                 </View>

//                <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold', marginStart: 12, }}>{data.item.employe} </Text>
//                 <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold', marginStart: 12, }}>{data.item.name} </Text>
//                 <Tex t style={{ color: colors.text, fontSize: 16, fontWeight: 'bold', marginStart: 12, }}>{data.item.class} </Text>
//                 <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold', marginStart: 12, }}>{data.item.section} </Text>


//                 <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'normal', marginStart: 12, marginTop: 7 }}>{data.item.description}</Text>
//                 <Text style={{ color: colors.text, fontSize: 13, fontWeight: 'normal', marginStart: 12, marginTop: 4, alignSelf: 'flex-end' }}>{data.item.date} </Text>

//             </Card>


//         )
//     }

// return(

// <View style={{height:Dimensions.get('window').height,bottom:12}}> 
// <View style={{ flex: 1, backgroundColor: colors.b,  }}>


// <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.background, marginTop: 17, marginStart: 14, left: 6 }}> Applied Leave List </Text>

// <FlatList data={horizontalview} renderItem={apperancce} horizontal={false} style={{ margin: 9, columnGap: 5 }}></FlatList>


// </View>


// </View>

// )





// }





// import { useTheme, Card, Button, TextInput,Menu } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, Image, Dimensions, ScrollView, FlatList, SafeAreaView, Alert,TouchableOpacity } from 'react-native';
// import Leavedetail from './Leavedetail';
// const [visible, setVisible] = useState(false);
//     const [selectedOption, setSelectedOption] = useState('Pending');

// const ApprovalMenu = () => {
//     const { colors } = useTheme();
    
//     const openMenu = () => setVisible(true);
//     const closeMenu = () => setVisible(false);
    
//     const handleOptionSelect = (option) => {
//         setSelectedOption(option);
//         setVisible(false);
//     };
//     const apperancce = (data) => {
//         const { colors } = useTheme();

       
//         return (
//             <Card style={{ width: '95%', alignSelf: 'center', backgroundColor: colors.primary, marginTop: 14, padding: 8 }}>
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 6 }}>
//                     <Text style={{ color: colors.text, fontSize: 17, fontWeight: 'bold', marginStart: 9, marginTop: 6 }}>{data.item.text} </Text>
//                     <ApprovalMenu initialOption="Pending" />
//                 </View>
//                 <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'bold', marginStart: 12 }}>{data.item.employe} </Text>
//                 <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'bold', marginStart: 12 }}>{data.item.name} </Text>
//                 <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'normal', marginStart: 12, marginTop: 7 }}>{data.item.description}</Text>
//                 <Text style={{ color: colors.text, fontSize: 13, fontWeight: 'normal', marginStart: 12, marginTop: 4, alignSelf: 'flex-end' }}>{data.item.date} </Text>
//             </Card>
//         );
//     };
    

// return(

// <View style={{height:Dimensions.get('window').height,bottom:12}}> 


// <FlatList data={horizontalview} renderItem={apperancce} horizontal={false} style={{ margin: 9, columnGap: 5 }}></FlatList>

// <View style={{ flex: 1, backgroundColor: colors.b,  }}>
//  <View>
         
         
         
         
//             <TouchableOpacity onPress={openMenu}>
//                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                     <Text style={{ color: selectedOption === 'Approved' ? 'green' : selectedOption === 'Rejected' ? 'red' : selectedOption === 'Pending' ? 'black' : colors.text }}>
//                         {selectedOption}
//                     </Text>
//                     <Icon name='chevron-down' color={colors.text} size={24} />
//                 </View>
//             </TouchableOpacity>
//             <Menu
//                 visible={visible}
//                 onDismiss={closeMenu}
//                 anchor={<Text onPress={openMenu} style={{ color: colors.text }}></Text>}
//             >
//                 <Menu.Item onPress={() => handleOptionSelect('Approved')} title="Approved" titleStyle={{ color: 'green' }}/>
//                 <Menu.Item onPress={() => handleOptionSelect('Rejected')} title="Rejected" titleStyle={{ color: 'red' }} />
//                 <Menu.Item onPress={() => handleOptionSelect('Pending')} title="Pending" titleStyle={{ color: 'black' }} />
//             </Menu>
//         </View>


// </View>



// </View>

// )

// }
// export default ApprovalMenu;




import React, { useState } from 'react';
import { useTheme, Card, Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const ApprovalMenu = ({navigation}) => {
    const { colors } = useTheme();
    const [visible, setVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Pending');

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setVisible(false);
    };

    return (
        <View>
            <TouchableOpacity onPress={openMenu}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: selectedOption === 'Approved' ? 'green' : selectedOption === 'Rejected' ? 'red' : selectedOption === 'Pending' ? 'black' : colors.text }}>
                        {selectedOption}
                    </Text>
                    <Icon name='chevron-down' color={colors.text} size={24} />
                </View>
            </TouchableOpacity>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Text onPress={openMenu} style={{ color: colors.text }}></Text>}
            >
                <Menu.Item onPress={() => handleOptionSelect('Approved')} title="Approved" titleStyle={{ color: 'green' }}/>
                <Menu.Item onPress={() => handleOptionSelect('Rejected')} title="Rejected" titleStyle={{ color: 'red' }} />
                <Menu.Item onPress={() => handleOptionSelect('Pending')} title="Pending" titleStyle={{ color: 'black' }} />
            </Menu>
        </View>
    );
};

const Studentleaverequest = ({navigation}) => {
    const { colors } = useTheme();
   const horizontalview = [{ date: '11-01-2023, 09:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'Casual Leave', employe: 'id: 1224 ', name: 'Name: kotla.Ramadevi',class:'Class: V',section:'Section: A', }, { date: '13-01-2023, 11:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'Medical Leave', employe: 'id: 3334 ', name: 'Name: Varahi.Ravukumar',class:'Class: IX',section:'Section: B' }, { date: '16-03-2023, 11:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'Casual Leave', employe: 'id: 8769 ', name: 'Name: Deva.Prathiba',class:'Class: IV',section:'Section: A' },{ date: '16-03-2023, 11:15 AM', description: 'Lorem ipsum dolor st amet,consecttetur adipiscing elit,sed to eiusmod tempor incididunt ut labore et dolore magna aliqua ', text: 'Casual Leave', employe: 'id: 8769 ', name: 'Name: Deva.Prathiba',class:'Class: III',section:'Section: B' }]


    const apperancce = (data) => {
        return (
            <Card style={{ width: '95%', alignSelf: 'center', backgroundColor: colors.primary, marginTop: 14, padding: 8 }}onPress={()=>navigation.navigate('Leavedetail')}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',margin:7  }}>
                    <Text style={{ color: colors.text, fontSize: 19, fontWeight: 'bold', }}>{data.item.text} </Text>
                    <ApprovalMenu initialOption="Pending" />
                </View>
                <View style={{padding:7}}>

                <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold',  }}>{data.item.employe} </Text>
               <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold', }}>{data.item.name} </Text>  
             <Text  style={{ color: colors.text, fontSize: 16, fontWeight: 'bold',  }}>{data.item.class} </Text>
            <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold',  }}>{data.item.section} </Text>

            <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'normal',  }}>{data.item.description}</Text>
            </View>

            <Text style={{ color: colors.text, fontSize: 13, fontWeight: 'normal', marginStart: 12, marginTop: 4, alignSelf: 'flex-end' }}>{data.item.date} </Text>

            </Card>
        );
    };

    return (
        <FlatList data={horizontalview} renderItem={apperancce} horizontal={false} style={{ margin: 9, }} />
    );
};

export default Studentleaverequest;




