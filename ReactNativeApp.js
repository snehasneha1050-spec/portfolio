import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const PremiumDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#0F172A', // Deep slate
    card: '#0F172A',
    text: '#F8FAFC',
    border: '#1E293B',
    primary: '#38BDF8', // Neon sky blue
  },
};

function HomeScreen({ navigation }) {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  const skills = [
    'React Native', 'JavaScript', 'Python', 'Java', 'SQL', 
    'Expo', 'HTML5/CSS3', 'Git', 'Deep Learning'
  ];

  const projects = [
    {
      title: 'Smart Task Mobile App',
      desc: 'A full-featured task management app with CRUD functionality using AsyncStorage and React Hooks.',
      link: 'https://github.com/snehasneha1050-spec/Smart-Tasks-App'
    },
    {
      title: 'Real-Time Visual Object Recognition',
      desc: 'Deep learning framework using CNNs for high-accuracy object detection in live video feeds.',
      link: 'https://github.com/snehasneha1050-spec'
    }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
        {/* Header / Hero */}
        <View style={styles.heroSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>SM</Text>
          </View>
          <Text style={styles.greeting}>WELCOME TO MY PORTFOLIO</Text>
          <Text style={styles.name}>Sneha Madavali</Text>
          <Text style={styles.bio}>
            Recent Computer Science Engineering Graduate with hands-on experience in mobile app development using React Native. Skilled in building scalable applications and deep learning.
          </Text>
        </View>

        {/* Contact Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Get In Touch</Text>
          
          <TouchableOpacity style={styles.contactRow} activeOpacity={0.7} onPress={() => openLink('mailto:snehasneha1050@gmail.com')}>
            <Ionicons name="mail" size={22} color="#38BDF8" />
            <Text style={styles.contactText}>snehasneha1050@gmail.com</Text>
          </TouchableOpacity>
          
          <View style={styles.contactRow}>
            <Ionicons name="call" size={22} color="#38BDF8" />
            <Text style={styles.contactText}>+91-9014045023</Text>
          </View>
          
          <View style={styles.contactRow}>
            <Ionicons name="location" size={22} color="#38BDF8" />
            <Text style={styles.contactText}>Punganur, Andhra Pradesh</Text>
          </View>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn} activeOpacity={0.7} onPress={() => openLink('https://github.com/snehasneha1050-spec')}>
              <Ionicons name="logo-github" size={24} color="#F8FAFC" />
              <Text style={styles.socialBtnText}>GitHub</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.socialBtn} activeOpacity={0.7} onPress={() => openLink('https://www.linkedin.com/in/madavali-sneha-97563726a')}>
              <Ionicons name="logo-linkedin" size={24} color="#38BDF8" />
              <Text style={[styles.socialBtnText, { color: '#38BDF8' }]}>LinkedIn</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <View key={index} style={styles.skillBadge}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Projects</Text>
          {projects.map((proj, index) => (
            <TouchableOpacity key={index} style={styles.card} activeOpacity={0.7} onPress={() => navigation.navigate('ProjectDetails', { project: proj })}>
              <Text style={styles.cardTitle}>{proj.title}</Text>
              <Text style={styles.cardDesc}>{proj.desc}</Text>
              <View style={styles.cardFooter}>
                <Ionicons name="arrow-forward" size={18} color="#38BDF8" />
                <Text style={styles.cardFooterText}>View Details</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 Sneha Madavali</Text>
          <Text style={styles.footerText}>Built with React Native</Text>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

function DetailsScreen({ route }) {
  const { project } = route.params;
  
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  return (
    <ScrollView style={styles.detailsContainer} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Stylish Hero Header for Details */}
      <View style={styles.detailsHero}>
        <Ionicons name="rocket-outline" size={80} color="#38BDF8" />
      </View>
      
      <View style={styles.detailsContent}>
        <Text style={styles.detailsTitle}>{project.title}</Text>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>Featured Work</Text>
        </View>
        <Text style={styles.detailsDesc}>{project.desc}</Text>
        
        <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8} onPress={() => openLink(project.link)}>
          <Ionicons name="logo-github" size={24} color="#0F172A" />
          <Text style={styles.primaryButtonText}>View Source on GitHub</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

export default function ReactNativeApp() {
  return (
    <NavigationContainer theme={PremiumDarkTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ProjectDetails" 
          component={DetailsScreen} 
          options={{ 
            title: 'Project Overview',
            headerShadowVisible: false, // Removes the border line
            headerBackTitleVisible: false, // Cleaner look on iOS
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F172A', // Dark background
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  heroSection: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#1E293B',
    borderWidth: 2,
    borderColor: '#38BDF8', // Glow ring effect
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#38BDF8',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 5,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: '900',
    color: '#38BDF8',
  },
  greeting: {
    fontSize: 14,
    color: '#38BDF8',
    marginBottom: 8,
    letterSpacing: 2,
    fontWeight: '600',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 16,
    textAlign: 'center',
  },
  bio: {
    fontSize: 16,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 26,
    paddingHorizontal: 10,
  },
  section: {
    marginBottom: 36,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 16,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  contactText: {
    fontSize: 16,
    color: '#CBD5E1',
    marginLeft: 12,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E293B',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    flex: 0.48,
    borderWidth: 1,
    borderColor: '#334155',
  },
  socialBtnText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
    color: '#F8FAFC',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillBadge: {
    backgroundColor: 'rgba(56, 189, 248, 0.1)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(56, 189, 248, 0.3)',
    marginRight: 10,
    marginBottom: 10,
  },
  skillText: {
    color: '#38BDF8',
    fontWeight: '500',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#334155',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 8,
  },
  cardDesc: {
    fontSize: 15,
    color: '#94A3B8',
    lineHeight: 24,
    marginBottom: 20,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardFooterText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '600',
    color: '#38BDF8',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 20,
  },
  footerText: {
    color: '#475569',
    fontSize: 14,
    marginBottom: 4,
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  detailsHero: {
    height: 250,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  detailsContent: {
    padding: 20,
  },
  detailsTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#F8FAFC',
    marginBottom: 12,
  },
  badgeContainer: {
    backgroundColor: 'rgba(56, 189, 248, 0.15)',
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  badgeText: {
    color: '#38BDF8',
    fontSize: 14,
    fontWeight: 'bold',
  },
  detailsDesc: {
    fontSize: 17,
    color: '#CBD5E1',
    lineHeight: 28,
    marginBottom: 30,
  },
  primaryButton: {
    flexDirection: 'row',
    backgroundColor: '#38BDF8',
    padding: 16,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#38BDF8',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  primaryButtonText: {
    color: '#0F172A',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});