import React, { useCallback, useState } from 'react'
import { Center, VStack, useColorModeValue, Fab, Icon } from 'native-base'
import TaskList from '../components/task-list'
import { AntDesign } from '@expo/vector-icons'
import AnimatedBox from '../components/animated-color-box'
import shortid from 'shortid'
import Masthead from '../components/masthead'
import NavBar from '../components/navbar'

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Lavar louça do almoço e janta ',
    done: false
  },
  {
    id: shortid.generate(),
    subject: 'Arrumar a cama Qunado acordar',
    done: false
  }
]

export default function MainScreen() {
  const [data, setData] = useState(initialData)
  const [editingItemId, setEditingItemId] = useState<string | null>(null)

  const handleToggleTaskItem = useCallback((item) => {
    setData((prevData) => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        done: !item.done
      }
      return newData
    })
  }, [])
  const handleChangeTaskItemSubject = useCallback((item, newSubject) => {
    setData((prevData) => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        subject: newSubject
      }
      return newData
    })
  }, [])
  const handleFinishEditingTaskItem = useCallback((item) => {
    setEditingItemId(null)
  }, [])
  const handlePressTaskItemLabel = useCallback((item) => {
    setEditingItemId(item.id)
  }, [])
  const handleRemoveItem = useCallback((item) => {
    setData((prevData) => {
      const newData = prevData.filter((i) => i.id !== item.id)
      return newData
    })
  }, [])

  return (
    <AnimatedBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'blueGray.900')}
      w="full"
    >
      <Masthead
        title="What's up, Douglas!"
        image={require('../assets/masthead.png')}
      >
        <NavBar />
      </Masthead>
      <VStack
        flex={1}
        space={1}
        mt="-20px"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        pt="20px"
        bg={useColorModeValue('warmGray.50', 'blueGray.900')}
      >
        <TaskList
          data={data}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
        />
      </VStack>
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
        colorScheme={useColorModeValue('blue', 'darkBlue')}
        bg={useColorModeValue('blue.600', 'blue.600')}
        onPress={() => {
          const id = shortid.generate()
          setData([
            {
              id,
              subject: '',
              done: false
            },
            ...data
          ])
          setEditingItemId(id)
        }}
      />
    </AnimatedBox>
  )
}
