import React, { useState } from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  isPassword = false,
  rightComponent,
  error,
  options,
  keyboardType,
  autoCapitalize,
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(secureTextEntry);
  const [modalVisible, setModalVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const handleOptionSelect = (option) => {
    onChangeText(option.value);
    setModalVisible(false);
  };

  const isDropdown = Array.isArray(options) && options.length > 0;
  const selectedOptionLabel = isDropdown
    ? options.find((option) => option.value === value)?.label || placeholder
    : null;

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}

      {isDropdown ? (
        <>
          <TouchableOpacity
            style={styles.inputWrapper}
            onPress={() => setModalVisible(true)}
          >
            <Text style={[styles.input, !value && { color: '#282D2A' }]}>
              {selectedOptionLabel}
            </Text>
            <View style={styles.rightComponent}>
              <Feather name="chevron-down" size={20} color="#666666" />
            </View>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <TouchableOpacity
              style={styles.modalOverlay}
              activeOpacity={1}
              onPress={() => setModalVisible(false)}
            >
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>{`Select ${
                    label || 'Option'
                  }`}</Text>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Feather name="x" size={24} color="#333333" />
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={options}
                  keyExtractor={(item) => item.value}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[
                        styles.optionItem,
                        item.value === value && styles.selectedOption,
                      ]}
                      onPress={() => handleOptionSelect(item)}
                    >
                      <Text
                        style={[
                          styles.optionText,
                          item.value === value && styles.selectedOptionText,
                        ]}
                      >
                        {item.label}
                      </Text>
                      {item.value === value && (
                        <Feather name="check" size={18} color="#10B981" />
                      )}
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableOpacity>
          </Modal>
        </>
      ) : (
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={isPassword ? hidePassword : secureTextEntry}
            placeholderTextColor="#282D2A"
            keyboardType={keyboardType || 'default'}
            autoCapitalize={autoCapitalize}
            {...props}
          />

          {isPassword && (
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.eyeIcon}
            >
              <Feather
                name={hidePassword ? 'eye' : 'eye-off'}
                size={20}
                color="#666666"
              />
            </TouchableOpacity>
          )}

          {rightComponent && (
            <View style={styles.rightComponent}>{rightComponent}</View>
          )}
        </View>
      )}

      <View style={[styles.inputUnderline, error && styles.errorUnderline]} />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontFamily: 'Nunito',
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 4,
    fontWeight: '500',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  input: {
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#1F2937',
    backgroundColor: '#FEFEFE',
    borderRadius: 6,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 4,
    fontWeight: '600',
  },
  inputUnderline: {
    height: 1,
    backgroundColor: '#5F5757',
    width: '100%',
    marginTop: 2,
  },
  errorUnderline: {
    backgroundColor: '#EF4444',
  },
  rightComponent: {
    marginLeft: 8,
  },
  errorText: {
    fontFamily: 'Nunito',
    fontSize: 12,
    color: '#EF4444',
    marginTop: 4,
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    padding: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  modalTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: '#333333',
    fontWeight: '700',
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  selectedOption: {
    backgroundColor: '#F3F4F6',
  },
  optionText: {
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#333333',
  },
  selectedOptionText: {
    fontFamily: 'Nunito-Bold',
    color: '#10B981',
    fontWeight: '700',
  },
});

export default CustomInput;
