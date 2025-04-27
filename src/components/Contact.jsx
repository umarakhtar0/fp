import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button, Form, Input, message, Spin } from 'antd';
import { MailOutlined, UserOutlined, MessageOutlined, PhoneOutlined } from '@ant-design/icons';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './ContactPage.scss';

const ContactPage = () => {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const onFinish = (values) => {
    setIsSubmitting(true);
    
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      phone: values.phone,
      message: values.message
    };

    emailjs.send(
      'service_lzd9kz5', 
      'template_qvtmg4n', 
      templateParams, 
      'hvVNnHlIeuHV57L-h'
    )
    .then((response) => {
      message.success({
        content: 'Message sent successfully!',
        duration: 3,
        style: {
          marginTop: '20vh',
          textAlign: 'center',
        },
      });
      form.resetFields();
    })
    .catch((error) => {
      message.error({
        content: 'Failed to send message. Please try again later.',
        duration: 3,
        style: {
          marginTop: '20vh',
          textAlign: 'center',
        },
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="contact-card"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="contact-title">
          <MailOutlined className="contact-icon" />
          Contact Us
        </h1>

        <Form
          form={form}
          ref={formRef}
          name="contact-form"
          onFinish={onFinish}
          layout="vertical"
          className="contact-form"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="Your Name" 
              size="large" 
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { 
                required: true, 
                message: 'Please input your email!' 
              },
              {
                type: 'email',
                message: 'Please enter a valid email!',
              },
            ]}
          >
            <Input 
              prefix={<MailOutlined />} 
              placeholder="Your Email" 
              size="large" 
            />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              {
                pattern: new RegExp(/^[0-9\-\+]{9,15}$/),
                message: 'Please enter a valid phone number!',
              },
            ]}
          >
            <Input 
              prefix={<PhoneOutlined />} 
              placeholder="Your Phone (optional)" 
              size="large" 
            />
          </Form.Item>

          <Form.Item
            name="message"
            id='message'
            rules={[{ required: true, message: 'Please input your message!' }]}
          >
            <Input.TextArea 
              prefix={<MessageOutlined />} 
              placeholder="Your Message" 
              rows={4} 
            />
          </Form.Item>

          <Form.Item>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                type="primary" 
                htmlType="submit" 
                size="large" 
                icon={<FaPaperPlane />}
                loading={isSubmitting}
                className="submit-button"
              >
                Send Message
              </Button>
            </motion.div>
          </Form.Item>
        </Form>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;