import React from 'react'
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import NavBar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'
const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.50')}
      w="full"
    >
      <Masthead
        title="About this App"
        image={require('../assets/masthead1.png')}
      >
        <NavBar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'blueGray.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require('../assets/douglas.jpg')}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>

          <Text fontSize="md" w="full">
            Software engineer! apaixonado por tecnologia, ciência e inovação.
          </Text>
          <LinkButton
            colorScheme="blue"
            size="lg"
            borderRadius="full"
            href="https://www.linkedin.com/in/douglas-silva-926345147/"
            leftIcon={
              <Icon as={Feather} name="linkedin" size="sm" opacity={0.5} />
            }
          >
            Go to Linkedin
          </LinkButton>
          <LinkButton
            colorScheme="green"
            size="lg"
            borderRadius="full"
            href="https://twitter.com/Ediigas1"
            leftIcon={
              <Icon as={Feather} name="twitter" size="sm" opacity={0.5} />
            }
          >
            Go to Twitter
          </LinkButton>
          <LinkButton
            colorScheme="red"
            size="lg"
            borderRadius="full"
            href="https://www.instagram.com/dodo_odouglas/"
            leftIcon={
              <Icon as={Feather} name="instagram" size="sm" opacity={0.5} />
            }
          >
            Go to Instagram
          </LinkButton>
          <LinkButton
            colorScheme="red"
            size="lg"
            borderRadius="full"
            href=""
            leftIcon={
              <Icon as={Feather} name="external-link" size="sm" opacity={0.5} />
            }
          >
            Go to Portfólio
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen
