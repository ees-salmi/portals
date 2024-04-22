import React ,{Component}                          from 'react';
//import { Link }                       from 'react-router-dom'
import {Button,  Label ,Modal,Form,FormGroup,Input,ModalBody,ModalHeader }        from 'reactstrap';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            isModalOpen : false
          
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
    

    render(){

    
    return(
        
          
            <div className="col-12">

               <Button style={{}} onClick={this.toggleModal} value="submit" color="primary"><i class="fa fa-pencil"></i>submit comment</Button>
               <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>submit comment</ModalHeader>
                            <ModalBody>
                                <Form onSubmit={this.handleLogin}>
                                <FormGroup>
                                    <Label htmlFor="rating"></Label>
                                    <Input type="select" id="rating" name="rating"
                                        innerRef={(input) => this.username = input} >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                                 <FormGroup>
                                    <Label htmlFor="name">name</Label>
                                    
                                    <Input type="text" id="" name="name"
                                        innerRef={(input) => this.password = input}  />
                                </FormGroup> 
                                <FormGroup>
                                    <Label for="exampleText"  md={4} >Text Area</Label>
                                    <Input type="textarea" name="text" id="exampleText" rows={4}/>
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Login</Button>
                            </Form>
                            </ModalBody>
                             </Modal>
                            
            </div>
            
        
    );
}
}

export default CommentForm;